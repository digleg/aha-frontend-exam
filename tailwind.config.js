/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          c181818: '#181818',
          c121212: '#121212',
          c5D5D5D: '#5D5D5D',
          c6A6A6A: '#6A6A6A',
          c1B1B1B: '#1B1B1B',
          c24242402: 'rgba(24, 24, 24, 0.2)',
        },
      },
      height: {
        'h-66': '66px',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // change xl from 1280px to 1440px
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      boxShadowNavBar: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
    },
    backdropBlur: {
      backdropBlurNavBar: 'blur(27.1828px)',
    },
  },
  plugins: [],
};
