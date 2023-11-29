import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": '#ededf0',
        "primary-100": '#c7c8d2',
        "primary-200": '#acaebc',
        "primary-300": '#86889d',
        "primary-400": '#6f718a',
        "primary-500": '#4b4e6d',
        "primary-600": '#444763',
        "primary-700": '#35374d',
        "primary-800": '#292b3c',
        "primary-900": '#20212e',

        "secondary-50": '#f4f6f7',
        "secondary-100": '#dee2e7',
        "secondary-200": '#ced5dc',
        "secondary-300": '#b8c1cc',
        "secondary-400": '#aab5c2',
        "secondary-500": '#95a3b3',
        "secondary-600": '#8894a3',
        "secondary-700": '#6a747f',
        "secondary-800": '#525a62',
        "secondary-900": '#3f444b',

        "grey-50": '#e9e9e9',
        "grey-100": '#bababa',
        "grey-200": '#999999',
        "grey-300": '#6b6b6b',
        "grey-400": '#4e4e4e',
        "grey-500": '#222222',
        "grey-600": '#1f1f1f',
        "grey-700": '#181818',
        "grey-800": '#131313',
        "grey-900": '#0e0e0e',

        "white-500": '#ffffff',
        "white-600": '#e8e8e8',
        "white-700": '#b5b5b5',
        "white-800": '#8c8c8c',
        "white-900": '#6b6b6b',
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
