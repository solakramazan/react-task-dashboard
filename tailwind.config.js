/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'todo': '#EF4444',
        'progress': '#F59E0B',
        'done': '#10B981',
      },
    },
  },
  plugins: [],
}
