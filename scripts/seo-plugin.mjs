import path from "node:path";
import { generateDist } from "./seo-build.mjs";

/* Vite plugin: after the site is built, write the sitemap, robots.txt, a 404 page and per-page HTML heads. */
export default function seoBuild() {
  let outDir = "dist";
  let rootDir = process.cwd();
  return {
    name: "magic-bus-seo-build",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
      rootDir = config.root;
    },
    closeBundle() {
      generateDist(path.resolve(rootDir, outDir));
    },
  };
}
