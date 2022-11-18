// 导入核心模块 path
const path = require('path')
var webpack = require('webpack')
// vue-loader
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {VueLoaderPlugin} = require('vue-loader')
// 导入自动生成html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导入自动清除 dist 目录的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// js 压缩
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 配置文件
module.exports = {
    // 配置入口
    entry: './src/main.js',
    // webpack.config.js 文件 配置出口
    output: {
        filename: '[name]_[hash:8].js', // 出口文件的名称  'main[hash:8].js' 清除缓存
        path: path.join(__dirname, '/dist') // 出口文件生成的路径
    },
    // 配置 mode, development 开发环境  production 生产环境
    mode: 'development',
    // 配置解析
    resolve: {
        alias: {
            // key: value
            '@': path.resolve(__dirname, 'src'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@view': path.resolve(__dirname, 'src/view'),
            '@router': path.resolve(__dirname, 'src/router'),
        },
        // 配置可省略的后缀
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    // 配置源码映射
    // devtool: 'source-map',
    // 配置 loader
    module: {
        // 配置规则
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ca]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.s[ca]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|webp|jpeg)$/,
                use: ["url-loader"]
            },
        ]
    },
    // devtool: '#eval-source-map',
    // 配置 plugin
    plugins: [
        // 自动生成html文件的插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './public/index.html')
        }),
        // 自动清除 dist 目录插件
        new CleanWebpackPlugin(),
        // 配置 vue loader 插件
        new VueLoaderPlugin(),
    ],
    // 配置开启服务器的信息
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000, // 配置端口号
        open: true, // 自动打开浏览器
        hot: true, // 开启热更新 
    },
    performance: {
        hints: false
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
}