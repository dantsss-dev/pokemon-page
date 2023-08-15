/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',

        tablet: '768px',

        desktop: '1441px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        karla: ['var(--font-karla)'],
        pro: ['var(--font-pro)'],
      },
      colors: {
        primary: '#F2B807',
        second: '#F28F16',
        third: '#F5DB13',
        danger: '#D93E30',
        white: '#F2F2F2',
        dark: '#212121',
      },
    },
  },
  plugins: [],
}
