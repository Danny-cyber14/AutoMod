module.exports = {
  content: [
    "./src/**/*.{html,js}", // Watch files in the src folder
    "./dist/**/*.{html,js}", // Watch files in the dist folder after the build
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
