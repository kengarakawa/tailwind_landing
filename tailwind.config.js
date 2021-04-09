module.exports = {
  mode : 'jit' , 
  purge : [
    './src/**/*.html' , 
    './src/**/*.jsx' , 
   './src/**/*.blade.php'
   ] , 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat' , 'Prompt' , 'sans-serif'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
