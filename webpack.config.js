const path = require('path');

module.exports = {
  entry: './src/transparentGradient.ts',
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
    filename: "transparentGradient.js",
    path: path.resolve(__dirname, 'lib'),
  },
  optimization: {
    minimize: false, // 압축 비활성화
  },
};