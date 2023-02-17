/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '16': 'repeat(auto-fit,minmax(200px,1fr)',
      }
    }
    },
  plugins: [
    require('flowbite/plugin')
  ],
}