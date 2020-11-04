// vue.config.js
const path = require('path') 
module.exports = {
    //process.env.NODE_ENV !== 'production',
    lintOnSave: false,

    // module: {
    //     rules: [{
    //         test: /\.less$/,
    //         use: ['style-loader', 'css-loader', 'less-loader', {
    //             loader: 'style-resources-loader',
    //             options: {
    //                 patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
    //                 injector: 'append'
    //             }
    //         }]
    //     }]
    // },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    }
}
