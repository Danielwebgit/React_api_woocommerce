const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin }= require('clean-webpack-plugin')

const PUBLIC_DIR = 'public';

module.exports={
    entry : path.resolve(__dirname,'src','index.js'),
    mode  : 'development',

    devServer:{
        historyApiFallback: true,

    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use:[

                    { loader: "style-loader" },
                    { loader: "css-loader" },

                ]
            }
        ],
    },
    output: {
        filename: 'main-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [

        new CleanWebpackPlugin(),

        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC_DIR, 'index.html'
            )
        }),
    ],

    target: "web"
};
