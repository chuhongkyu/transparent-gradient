const path = require('path');

module.exports = {
  entry: './src/transparentGradient.ts',
  devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
  resolve: {
      extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "ransparentGradient.bundle.js",
    path: path.resolve(__dirname, 'lib'),
    library: 'tGradient',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

};