module.exports = {
  server: {
    // nuxt.js server options ( can be overrided by environment variables )
    port: 3000,
    host: "0.0.0.0",
  },

  /*
   ** Headers of the page
   */
  head: {
    title: `woop`,
    meta: [
      { charset: `utf-8` },
      {
        name: `viewport`,
        content: `width=device-width, initial-scale=1, maximum-scale=1`,
      },
      {
        hid: `description`,
        name: `description`,
        content: `Nuxt.js project`,
      },
    ],
    link: [
      {
        rel: `icon`,
        type: `image/x-icon`,
        href: `/favicon.ico`,
      },
    ],
  },

  css: [
    `node_modules/normalize.css/normalize.css`,
    `~assets/fonts/ProximaNova-Black/font.scss`,
    `~assets/fonts/Roboto/font.scss`,
    `~assets/fonts/CeraPro/stylesheet.scss`,
    `~assets/scss/main.scss`,
  ],

  /*
   ** Customize the progress bar color
   */
  loading: { color: `#3B8070` },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: `pre`,
          test: /\.(js|vue)$/,
          loader: `eslint-loader`,
          exclude: /(node_modules)/,
        });
      }
    },

    extractCSS: true,
  },

  plugins: [
    {
      src: `~plugins/global-ssr`,
      ssr: true,
    },
  ],

  // modules: [
  //   [
  //     `nuxt-sass-resources-loader`,
  //     [`node_modules/bootstrap/scss/bootstrap-grid.scss`],
  //   ],
  // ],

  // sassResources: [
  //   `node_modules/bootstrap/scss/bootstrap-grid.scss`,
  // ],

  router: {
    base:
      process.env.NODE_ENV === "production"
        ? `https://e-webdev.ru/example/sites/woop/`
        : "/",
  },
};
