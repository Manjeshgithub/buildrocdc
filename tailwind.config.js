module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC5500', // Burnt Orange
        secondary: '#FFD700', // Golden Yellow
        background: '#FFFAF0', // Off-White Background
        text: '#5A3E36', // Dark Brown Text
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
