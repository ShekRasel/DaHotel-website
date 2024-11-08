/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        updock: ["Dancing Script", 'cursive'],
        train: ["Train One", 'system-ui'],
        firsSans : ["Fira Sans", 'sans-serif'],
        sonsie : ["Sonsie One", 'system-ui'],
        charm : ["Charm", 'cursive'],
        roboto : ["Roboto Condensed", 'sans-serif'],
        tourney:["Tourney", 'sans-serif']
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        venom: 'marquee 3s linear',
        bounce: 'bounce 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        venom: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX()' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}