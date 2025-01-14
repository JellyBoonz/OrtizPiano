/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F7F4",
        backgroundDarker: "#7E8D85", // Slightly darker tone
        foreground: "#0c120c",
        accent: "#A2E3C4",
        secondary: "#0c120c",
        subtle: "#B3BFB8",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'Roboto', 'sans-serif'],
        'serif': ['ui-serif', '"Proxima Nova"', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },

  },
  plugins: [],
}