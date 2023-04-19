const path = require('path');

module.exports = {
  entry: './src/transparentGradient.js',
  output: {
    filename: 'transparentGradient.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'tGradient', 
  },
  optimization: {  
    minimize: false,
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
