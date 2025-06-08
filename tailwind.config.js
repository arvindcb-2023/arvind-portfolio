/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'bg-blue-100', 'text-blue-800',
    'bg-yellow-100', 'text-yellow-800',
    'bg-purple-100', 'text-purple-800',
    'bg-orange-100', 'text-orange-800',
    'bg-green-100', 'text-green-800',
    'bg-gray-200', 'text-gray-800'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

