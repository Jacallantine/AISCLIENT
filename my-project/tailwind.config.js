/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  screens: {
     
      '1300-md': {max: '1300px'},
      '1100-md': {max: '1100px'}, 
      '1000-md': {max: '1000px'}, 
      '800-md': { max: '768px' }, 
      '500-md': {max: '500px'},
      '300-md': {max: '300px'},
      '700-hmd': {'raw' : '(max-height:700px)'},
      '500-hmd': {'raw' : '(max-height:500px)'}
    },},
  },
  plugins: [],
}

