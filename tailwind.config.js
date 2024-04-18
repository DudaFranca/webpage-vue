/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      'primary': "#C66E0A",
      'third': "#2F3954"
    },

    backgroundImage: {
      'banner': "url('assets/banner.png')"
    },
  },
  plugins: [],
}
