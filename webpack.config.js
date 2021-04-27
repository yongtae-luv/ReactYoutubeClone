module.exports = {
  // 번들링을 시작할 파일
  entry: ['./src/index.js'],
  // 번들링 된 파일이 생성될 위치 설정
  output: {
    path: __dirname, // webpack.config.js가 있는 위치
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 다양한 모듈들(js,image,css등)을 처리하는 방법 결정
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // 빠르게 개발할 수 있도록 개발서버 제공

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
