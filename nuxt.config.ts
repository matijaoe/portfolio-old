import { meta } from './data/meta'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // TODO: ssr messes up with my inital gsap animations, fix this somehow without turning off ssr
  ssr: false,
  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  imports: {
    dirs: [
      'composables/**', // Scan all nested directories
    ],
  },
  css: [
    'assets/styles/variables.css',
    'assets/styles/fonts.css',
    'assets/styles/global.css',
    'assets/styles/animations.css',
    'assets/styles/floating-vue.css',
  ],
  colorMode: {
    storageKey: 'matijao-color-mode',
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: meta.title,
      meta: [
        { name: 'author', content: meta.author },
        { name: 'description', content: meta.description },
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
      link: [{ rel: 'canonical', href: meta.url }],
    },
  },
  image: {},
})
