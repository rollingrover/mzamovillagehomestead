/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zulu-brown': '#5C3A21',
        'zulu-brown-dark': '#2C1810',
        'zulu-brown-mid': '#7A5235',
        'zulu-ochre': '#C28A3E',
        'zulu-ochre-text': '#8A5A1E',
        'zulu-ochre-light': '#D9A65C',
        'zulu-green': '#4A6B3C',
        'zulu-black': '#1E1E1E',
        'zulu-cream': '#FDF8F0',
        'zulu-cream-light': '#FEFCF7',
        'zulu-text': '#3D2B1F',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(92, 58, 33, 0.12)',
        'warm-lg': '0 8px 40px rgba(92, 58, 33, 0.18)',
      }
    },
  },
  plugins: [],
}
