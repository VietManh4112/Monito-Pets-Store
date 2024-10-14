import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dashboard': '#f5f9fc',
      },
      fontSize: {
        s: '0.6rem'
      },
      keyframes: {
        shake: {
          '0,50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' }
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-1turn)' },
        },
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        'marquee': {
          '100%': {transform: 'translateY(-50%)'}
        }
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-reverse-slower':  'spin-reverse 6s linear infinite',
        'fade-in': 'fade-in var(--fade-in) linear forwards',
        'marquee': 'marquee var(--marquee-duration) linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
