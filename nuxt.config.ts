// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {

      // ! doesn't work
      '/cached-route': {
        swr: 10,
      },

      // ! doesn't work
      // '/cached-route': {
      //   static: true,
      // },

      // ! doesn't work
      // '/cached-route': {
      //   cache: {
      //     swr: true,
      //     maxAge: 10
      //   }
      // },

      // * works
      // '/**': {
      //   swr: 10
      // }
    }
  }
})
