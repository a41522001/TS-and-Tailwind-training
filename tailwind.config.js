/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // 確保包含 .vue 檔案
  ],
  theme: {
    container: {
      center: true,
      padding: ".75rem",
      screens: {
        DEFAULT: "1296px"
      }
    },
    extend: {},
  },
  plugins: [],
}
