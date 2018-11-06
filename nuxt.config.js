module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '田中のWEBデザインノート',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: '田中' },
      { hid: 'description', name: 'description', content: '未経験からWEBデザイナーを目指すサイト' },
      { name: 'keywords', content: 'DTP,web,WEB,デザイン,design,デザイナー,グラフィック,未経験,' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    { src: 'bulma', lang: 'sass' }
  ],
  build: {
    postcss: {
      plugins: {
        //  warning  in ./node_modules/bulma/bulma.sass を強制的に見えなくしてる
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
