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
          dark: '#1E2434',
          white: '#ffffff',
        },
        grey: {
          dark: '#7079a8',
          medium: '#d5d5d5',
          light: '#eeebe9',
          pale: '#f7f6f5',
          secondary: '#666666',
        },
        blu: {
          black: '#111111',
          dark: '#1E2434',
          medium: '#7079A8FF',
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
