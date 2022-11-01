// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  css: [
    '~/assets/styles/page-transitions.css',
    '~/assets/styles/keyframes.css',
    '~/assets/styles/floating-vue.css',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  colorMode: {
    storageKey: 'matijao-color-mode',
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
})
