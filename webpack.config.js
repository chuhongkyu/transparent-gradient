const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/transparentGradient.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'transparentGradient.js',
    clean: true,
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: ['.ts','.tsx','.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};