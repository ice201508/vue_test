module.exports = {
  devServer: {
    // open: true,
    host: '127.0.0.1',
    // post: 9999,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 本地服务器地址
        // target: 'https://api.leijiuling.com', // 线上真实地址
        ws: true,
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // publicPath: '/',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }

  // chainWebpack: (config) => {
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .tap((options) => {
  //       options.limit = 7000;
  //       options.name = 'img.[ext]';
  //       return options;
  //     });
  //   // .loader('url-loader')
  //   // .tap((options) => Object.assign({}, options, { limit: 1024, name: 'img/[name].[ext]' }));
  // },
  // css: {
  //   extract: {
  //     filename: '/css/[name].css',
  //     chunkFilename: '/css/[name].css',
  //   },
  // },
  // configureWebpack: {
  //   output: {
  //     filename: 'js/[name].js',
  //     chunkFilename: 'js/[name].js',
  //   },
  // },
};
