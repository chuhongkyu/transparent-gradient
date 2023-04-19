const path = require('path');

module.exports = {
  entry: {
    transparentGradient:'./src/transparentGradient.js',
  },
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `transparentGradient.min.js`,
    library: 'transparentGradient',
    libraryTarget: 'var',
  },
  optimization: {  
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
