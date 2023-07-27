/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // 0-375, 376-560, 560-975, 975-1024, 1024-1220, 1200 >
  theme: {
    screens: {
      xxs: '375px',
      xs: '390px',
      sm: '560px',
      md: '975px',
      lg: '1024px',
      xl: '1220px',
      xxl: '1221px'
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
