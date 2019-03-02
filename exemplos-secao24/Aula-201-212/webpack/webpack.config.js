const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        babelpolyfill: "babel-polyfill",
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist/bundle"),
        filename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css.css"
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader }, //usado no lugar de style-loader
                    { loader: "css-loader" }
                ]
            },
            //Configuração para usar o bootstrap com sass
            {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, //usado no lugar de style-loader 
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },
    //Configuração do devServer
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};