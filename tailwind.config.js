/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#2563eb',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}