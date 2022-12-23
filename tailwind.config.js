/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px'},
      
      'md': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
  
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

    },
  },
  plugins: [],
}
