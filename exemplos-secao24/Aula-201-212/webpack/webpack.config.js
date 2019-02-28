const path = require('path');

module.exports = {
    entry: ["babel-polyfill", './src/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
           /*  {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            } - utilizando tag style*/
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader" }
                ]
            }
        ]
    },
    //Configuração do devServer
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};