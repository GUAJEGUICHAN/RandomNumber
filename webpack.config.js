var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'public/index.html',

    }),

  ],

  module: {
    // 모듈 규칙
    rules: [
      // TypeScript 로더 설정
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },

  resolve: {
    // 생략 가능한 확장자로`.ts`, `.tsx` 추가
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  }
};