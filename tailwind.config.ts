/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F6F1",
        foreground: "#0c120c",
        accent: "#0c120c",
        secondary: "#0c120c",
        subtle: "#1A1A1A",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'Roboto', 'sans-serif'],
        'serif': ['ui-serif', '"Proxima Nova"', 'serif'], // Or Montserrat
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}