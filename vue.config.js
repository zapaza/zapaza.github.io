module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/zapaza.github.io/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        // prependData: `
        //   @import "@/assets/sass/lib/_breakpoints.scss";
        //   @import "@/assets/sass/lib/_functions.scss";
        //   @import "@/assets/sass/lib/_html-grid.scss";
        //   @import "@/assets/sass/lib/_mixins.scss";
        //   @import "@/assets/sass/lib/_vars.scss";
        //   @import "@/assets/sass/lib/_vendor.scss";
        // `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeDimensions: true }, { removeViewBox: false }],
        },
      });
  },
};
