import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  theme: {
    extend: {
      colors: {
        // === Primary brand colors ===
        "brand-red": "#E12228",    // Primary Red
        "brand-yellow": "#FFCC04", // Primary Yellow
        "brand-black": "#000000",
        "brand-white": "#FFFFFF",

        // === Secondary colors ===
        "brand-blue": "#21BDEA",
        "brand-magenta": "#E01085",
        "brand-green": "#B3CC35",

        // === Neutral utility shades ===
        "ink": "#1A1A1A",
        "border": "#E0E0E0",
      },
    },
  },
});
