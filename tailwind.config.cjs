/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        'primary-foreground': "hsl(var(--primary-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        menu: "hsl(var(--menu) / <alpha-value>)",
      }
    },
  },
  plugins: [],
};
