const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["babel-polyfill", './src/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
                    { loader: "file-loader" }
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