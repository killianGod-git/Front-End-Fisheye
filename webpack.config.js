const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/scripts/app.js'),
    photographer: path.resolve(__dirname, './src/scripts/pages/photographer.js')
  },
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: '[name].bundle.js',
  },
}