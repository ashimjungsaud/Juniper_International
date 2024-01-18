/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-0': '#164A41',
        'color-0.1': '#4D774E',
        'color-0.2': '#9DC88D',
        'color-0.3': '#F1B24A',
        'color-1': '#A3BCB6',
        'color-2': '#39603D',
        'color-3': '#3C403D',
        'color-4': '#DADED4',
        'color-5': '#FFFFFF',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

