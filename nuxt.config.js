export default {
  loading: false,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/zapaza.github.io/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'profile',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Profile web developer' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ['@/plugins/vuesax'],
  plugins: ['~/plugins/components'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-svg-loader',
    [
      'storyblok-nuxt',
      {
        accessToken: 'Vo577ulK6GIHPLhrBffUfgtt',
        cacheProvider: 'memory',
      },
    ],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '75521296',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-import': {},
        'postcss-calc': {},
        'postcss-simple-vars': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
    },
  },
};
