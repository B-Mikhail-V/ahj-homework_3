const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev; 

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: 'img/[name][ext][query]',
        publicPath: '',
    }, 
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          open: true,
          port: 9000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html'),
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd,
                removeComments: true,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            { 
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    }
                } , 
                    "css-loader"
                ],
              },
              { 
                test: /\.(?:|gif|png|jpg)$/i,
                type: 'asset/resource'
                // use: [{
                // //     loader: 'file-loader',
                //     options: {
                //         name: `./img/${filename('[ext]')}`
                //     }
                // }],
              },
              {
                test: /\.js$/, 
                exclude: /node_moduls/,
                use: ['babel-loader'],
            },
        ]
    }
};
 