/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero-background.webp')",
      },
      colors: {
        blue: "#10253E",
        red: "#780D29",
      },
      container: {
        center: true,
        padding: "20px",
      },
    },
  },
  plugins: [],
};
