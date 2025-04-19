/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors: {
        'nav-bg': 'var(--color-nav-bg)',
        'nav-bg-hover': 'var(--color-nav-bg-hover)',
      },
    },
  },
  plugins: [],
}

