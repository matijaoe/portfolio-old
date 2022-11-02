import { meta } from './data/meta'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    // '@nuxtjs/fontaine',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  css: [
    'assets/styles/variables.css',
    'assets/styles/fonts.css',
    'assets/styles/global.css',
    'assets/styles/animations.css',
    'assets/styles/floating-vue.css',
  ],
  app: {
    head: {
      title: meta.title,
      meta: [
        { name: 'author', content: meta.author },
        { name: 'description', content: meta.description },
        { name: 'robots', content: 'index,follow' },
        { name: 'googlebot', content: 'index,follow' },
        // Og data
        { name: 'og:title', content: meta.title },
        { name: 'og:site_name', content: meta.site_name },
        { name: 'og:description', content: meta.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: meta.url },
        { name: 'og:image', content: meta.thumbnail },
        { name: 'og:image:width', content: 3024 },
        { name: 'og:image:height', content: 1890 },
        { name: 'og:image:alt', content: 'Portfolio thumnbail' },
        { name: 'og:locale', content: 'en' },
        // Twitter data
        { name: 'twitter:site', content: meta.twitterTag },
        { name: 'twitter:creator', content: meta.twitterTag },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: meta.author },
        { name: 'twitter:description', content: meta.description },
        { name: 'twitter:image', content: meta.thumbnail },
        { name: 'twitter:url', content: meta.url },
      ],
      link: [
        { rel: 'canonical', href: meta.url },
      ],

    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  colorMode: {
    storageKey: 'matijao-color-mode',
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  image: { },
})
