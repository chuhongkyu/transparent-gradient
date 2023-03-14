const path = require('path');

module.exports = {
  entry: {
    main:'./src/transparentGradient.js',
    },
  output: {
    // 최종 번들링된 자바스크립트
    filename: 'transparentGradient.js',
    // dist를 배포용 폴더로 사용
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {  
    minimize: true,
  },
}