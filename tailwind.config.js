/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        yuruka: ['Yuruka', 'cursive'],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'vivi-pink': {
          '50': '#fcf3f8',
          '100': '#fbe8f2',
          '200': '#f8d2e6',
          '300': '#f4add1',
          '400': '#ee8cbb',
          '500': '#e15393',
          '600': '#cf3371',
          '700': '#b32359',
          '800': '#94204a',
          '900': '#7c1f40',
          '950': '#4b0c22',
        },
        'vivi-purple': {
          '50': '#fbf6fe',
          '100': '#f5ebfc',
          '200': '#eddafa',
          '300': '#dfbdf5',
          '400': '#cb93ed',
          '500': '#c07de6',
          '600': '#a34ad3',
          '700': '#8c38b8',
          '800': '#763297',
          '900': '#602a79',
          '950': '#431358',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

