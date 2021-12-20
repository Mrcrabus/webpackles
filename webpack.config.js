/* globals __dirname module*/

let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    devServer: {
        proxy: {
            '/js-ra-tokens-api/**': {
                target: 'http://faceprog.ru',
                secure: false,
                changeOrigin: true
            }
        }
    }

};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
}
