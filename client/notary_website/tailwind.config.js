module.exports = {
  content: [
    // purge option: cleans up unused classes for better performance 
    // https://stackoverflow.com/questions/70319979/purpose-of-content-in-tailwind-config
    './src/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        // => @media (min-width: 0px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',


        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        '3xl': '1700px',
        // => @media (min-width: 1700px) { ... }
      },
      colors: {

        // 'button-color': '#74c947',
        // 'button-color-hover': '#70c244',
        'button-color': '#123456',
        'button-color-hover': '#1B4E80',
        'grey-color': '#e5ecee',
        'turquoise': '#1B8080'
      }
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-10%)',
          animationTimingFunction: 'linear',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'linear'
        }
      }
    }
  },
  plugins: [],
}
