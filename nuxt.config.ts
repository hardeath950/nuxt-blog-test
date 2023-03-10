// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    'nuxt-directus'
  ],
  directus: {
    url: 'http://localhost:8055'
  },
  typescript: {
    shim: false
  },
  ssr: false
})
