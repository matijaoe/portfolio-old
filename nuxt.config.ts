// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
})
