module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the `src` folder
    './public/index.html',        // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00154F', // Dark Blue
        secondary: '#87CEFA', // Light Blue
        background: '#FFFFFF', // White
        text: '#00154F', // Dark Blue for text
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
