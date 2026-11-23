import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { generateDist } from "./seo-build.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));

/* Runs scripts/prerender.mjs in its own process. It needs NODE_ENV=development (React's dev JSX runtime).
   A failure only prints a warning: the site still builds and works, pages just keep the empty shell. */
function runPrerender(distDir) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(here, "prerender.mjs"), distDir], {
      stdio: "inherit",
      env: { ...process.env, NODE_ENV: "development" },
    });
    child.on("error", (e) => {
      console.warn(`Prerender could not start (${e.message}); pages keep the normal empty shell.`);
      resolve();
    });
    child.on("exit", (code) => {
      if (code) console.warn(`Prerender step exited with code ${code}; pages keep the normal empty shell.`);
      resolve();
    });
  });
}

/* Vite plugin: after the site is built, write the sitemap, robots.txt, a 404 page and per-page HTML heads,
   then prerender each page's content into its HTML. */
export default function seoBuild() {
  let outDir = "dist";
  let rootDir = process.cwd();
  let isSsrBuild = false;
  return {
    name: "magic-bus-seo-build",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
      rootDir = config.root;
      isSsrBuild = Boolean(config.build.ssr);
    },
    async closeBundle() {
      if (isSsrBuild) return;
      const distDir = path.resolve(rootDir, outDir);
      generateDist(distDir);
      await runPrerender(distDir);
    },
  };
}
