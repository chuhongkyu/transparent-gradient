const path = require('path');

module.exports = {
  entry: './src/transparentGradient.js',
  output: {
    filename: 'transparentGradient.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'tGradient',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};