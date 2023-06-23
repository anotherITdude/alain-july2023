/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '600px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      variants: {
        // ...
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
      fontFamily: {
        'gotham-black': ['gotham-black'],
        'gotham-black-italic': ['gotham-black-italic'],
        'neosans-bold': ['neosans-bold'],
        'neosans-medium': ['neosans-medium'],
        'neosans-regular': ['neosans-regular'],
        'primetime': ['primetime']
      },
    },
  },
  plugins: [],
}
