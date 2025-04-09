/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",              // Clean white background
        backgroundDarker: "#1e1f23",        // Deep charcoal/navy blend for navbar
        foreground: "#2c2f36",              // Dark neutral for body text
        accent: "#6cace4",                  // Muted blue—a calm, professional tone
        secondary: "#111827",               // Slate for emphasis
        subtle: "#b0b8c1",                  // Cool soft gray for borders/details
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'Roboto', 'sans-serif'],
        'serif': ['ui-serif', '"Georgia"', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}