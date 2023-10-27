
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: [
    '~/assets/styles/main.css',
  ],
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', ssr: false },
  ],
  routeRules: {
    '/layouts/default.vue': { ssr: false },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MLA SOFT',
    
      // rel: 'icon', type: 'image/svg', href: '/Favicon.ico'
    }
  },
  components: true,
});