// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 6969,
  },

  modules: ['@nuxt/ui', '@nuxthq/studio', '@nuxt/image'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ui: {
    global: true,
    icons: ['tabler', 'material-symbols'],
  },

  css: ['/assets/css/main.css'],
});
