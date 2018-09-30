// 自定义loader
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const config = {
  mode: 'development',
  entry: resolve('./src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('./02-make-loader/test-loader.js'),
            options: {
              /* ... */
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: resolve('./02-make-loader/css-loader.js'),
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  }
}
module.exports = config
