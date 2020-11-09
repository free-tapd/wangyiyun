// vue.config.js
const path = require('path') 
const autoprefixer = require('autoprefixer')
module.exports = {
    //process.env.NODE_ENV !== 'production',
    lintOnSave: false,

    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            // autoprefixer({
            //   browsers: ['Android >= 4.0', 'iOS >= 7']
            // }),
            // pxtorem({
            //   rootValue: 37.5,
            //   propList: ['*'],
            // })
          ]
        }
      }
    },
    publicPath:"/",
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    }
}
