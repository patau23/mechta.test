import defaultTheme from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    './app.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/**/*.{vue,js,ts,css}'
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
        "xxl": "1920px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    {
      handler: ({ matchComponents, theme }) => {
        // for dynamic trancate
        matchComponents(
          {
            truncate: value => ({
              "display": "-webkit-box !important",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": value /* Number of lines to show */,
              "overflow": "hidden",
            }),
          },
          {
            values: theme("truncate"),
          },
        )
      },
    },
  ],
}
