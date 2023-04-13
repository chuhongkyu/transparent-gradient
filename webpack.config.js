const path = require('path');

module.exports = {
  entry: {
    transparentGradient:'./src/transparentGradient.js',
  },
  mode:'production',
  output: {
    library: 'transparentGradient',
    path: path.resolve(__dirname, 'dist'),
    filename: `transparentGradient.min.js`,
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
