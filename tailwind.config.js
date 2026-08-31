// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#E12228",
        "brand-yellow": "#FFCC04",
        "brand-black": "#000000",
        "brand-white": "#ffffff",
        "brand-blue": "#21BDEA",
        "brand-magenta": "#E01085",
        "brand-green": "#B3CC35",
      },
    },
  },
  plugins: [],
};
