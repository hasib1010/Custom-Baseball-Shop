module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light", 
    ],
  },
  plugins: [require('daisyui')],
}
