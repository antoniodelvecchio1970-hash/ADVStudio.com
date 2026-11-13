/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        heroDark: '#0A0A0A',
        lightBg: '#FFFFFF',
        accentDark: '#121212',
        mutedGray: '#888888',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.25em',
        widest: '0.18em',
      }
    }
  },
  plugins: [],
}
