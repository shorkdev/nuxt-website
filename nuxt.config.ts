// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 6969,
  },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxthq/studio', '@nuxt/image'],

  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle'],
    },
    highlight: {
      theme: {
        default: 'rose-pine-dawn',
        dark: 'rose-pine',
      },
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'diff',
        'shell',
        'markdown',
        'yaml',
        'bash',
        'ini',
        'c',
        'cpp',
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  image: {
    inject: true,
  },

  ui: {
    global: true,
    icons: ['tabler', 'material-symbols'],
  },

  css: ['/assets/css/main.css'],
});