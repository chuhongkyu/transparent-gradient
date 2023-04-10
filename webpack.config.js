const path = require('path');

module.exports = {
  entry: {
    transparentGradient:'./src/transparentGradient.js',
  },
  mode:'production',
  output: {
    library: 'transparentGradient',
    libraryExport: 'transparentGradient',
    path: path.resolve(__dirname, 'dist'),
    filename: `transparentGradient.bundle.js`,
  },
  optimization: {  
    minimize: true,
  },
}