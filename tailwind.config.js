/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        moveUp: 'moveUp 1s ease-out',
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '128': '20rem', // Add your custom spacing size here
      },
    },
  },
  plugins: [],
}

