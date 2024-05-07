import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#111111',
          dark: '#2e2d2c',
          white: '#ffffff',
        },
        grey: {
          dark: '#7b7a79',
          medium: '#d5d5d5',
          light: '#eeebe9',
          pale: '#f7f6f5',
          secondary: '#666666',
        },
        states: {
          error: '#db5c4e',
          success: '#71ac70',
        },
        ext: {
          muted: '#a79a87',
          light: '#f4f2ef',
          overlay: 'rgba(30, 30, 30, 0.6)',
        },
      },
    },
  },
  plugins: [],
}
export default config
