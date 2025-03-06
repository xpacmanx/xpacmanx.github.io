/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.{html,md}',
    './*.html',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#292929',
            a: {
              color: '#1a8917',
              '&:hover': {
                color: '#166914',
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#292929',
        secondary: '#757575',
        accent: '#1a8917',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 