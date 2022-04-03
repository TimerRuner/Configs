const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

//! Активація конкретних режимів лише при наявності певного режиму збірки
const isDev = process.env.NODE_ENV === 'development'; //? поверне true/false в залежності від перевірки режиму збірки
const isProd = !isDev


//! Створення методів для підключення плагінів в залежності від режиму збірки
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

//! Метод для задання хешування імені файлу лише при продакшені
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


//! Метод для оптимізації задання конфігурації лоадерів для стилів
const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,//! вносити зміни без перезагрузки сторнки
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}


//!метод для скорочення запису конфігурацій для js
const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}


//! Метод для підключення eslint лише в дев режимі і лише для .js
const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
}

//! метод для динамічного добавлення плагінів
const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ]

  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

//**Об'єкт налаштування для webpack */
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'], //?Вказуємо кореневий js файл з якого почнеться компіляція
    analytics: './analytics.ts'
  },
  output: {
    filename: filename('js'),  //? назва файлу, який ми отримаємо по завершенню роботи webpack
    path: path.resolve(__dirname, 'dist') //? вказуємо папку в який передаємо білд
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  }
}
