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
    filename: "transparentGradient.js",
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false, // 압축 비활성화
  },
};