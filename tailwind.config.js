module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'close-menu': {
          '0%': { transform: 'scaleY(1)' },
          '20%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(0)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};