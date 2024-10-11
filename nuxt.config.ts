import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: "2024-04-03",

  app: {
    head: {
      title: "Test Mechta",
    },
  },

  devtools: { enabled: true },

  css: ["normalize.css", "~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "nuxt-font-loader",
    "nuxt-headlessui",
  ],

  typescript: {
    typeCheck: true,
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "",
    },
  },

  fontLoader: {
    local: [
      {
        src: "/fonts/Inter-Light.ttf",
        preload: true,
        family: "Inter",
        weight: "300",
        style: "normal",
        display: "swap",
      },
      {
        src: "/fonts/Inter-Regular.ttf",
        preload: true,
        family: "Inter",
        weight: "400",
        style: "normal",
        display: "swap",
      },
      {
        src: "/fonts/Inter-Medium.ttf",
        preload: true,
        family: "Inter",
        weight: "500",
        style: "normal",
        display: "swap",
      },
      {
        src: "/fonts/Inter-SemiBold.ttf",
        preload: true,
        family: "Inter",
        weight: "600",
        style: "normal",
        display: "swap",
      },
      {
        src: "/fonts/Inter-Bold.ttf",
        preload: true,
        family: "Inter",
        weight: "700",
        style: "normal",
        display: "swap",
      },
      {
        src: "/fonts/Inter-ExtraBold.ttf",
        preload: true,
        family: "Inter",
        weight: "900",
        style: "normal",
        display: "swap",
      },
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/app/style/core.scss" as *;',
        },
      },
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "app/icon")],
        symbolId: "icon-[dir]-[name]",
        customDomId: "__svg__icons__dom__",
      }),
    ],
  },

  // auth: {
  //   globalMiddleware: true,
  //   // @ts-expect-error Фикс auth-alt
  //   routerStrategy: "navigateTo",
  //   redirect: {
  //     login: "/auth",
  //     logout: "/logout",
  //     callback: "/auth",
  //     home: "/",
  //   },
  //   watchLoggedIn: true,
  //   strategies: {
  //     local: {
  //       scheme: "refresh",
  //       token: {
  //         property: "data.accessToken",
  //         maxAge: 60 * 60 * 24 * 7,
  //       },
  //       refreshToken: {
  //         property: "data.refreshToken",
  //         data: "refreshToken",
  //         maxAge: 60 * 24 * 10,
  //       },
  //       user: {
  //         property: "data",
  //       },
  //       endpoints: {
  //         login: {
  //           url: "/api/web/v1/auth",
  //           method: "post",
  //         },
  //         refresh: {
  //           url: "/api/web/v1/refresh",
  //           method: "post",
  //         },
  //         user: {
  //           url: "/api/web/v1/profile",
  //           method: "get",
  //         },
  //         logout: {
  //           url: "/api/web/v1/logout",
  //           method: "post",
  //         },
  //       },
  //     },
  //   },
  // },
});
