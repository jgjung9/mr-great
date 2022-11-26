/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('../public/imgs/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
