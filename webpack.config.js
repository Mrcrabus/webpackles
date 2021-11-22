const path = require("path");
let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "dist/"
    },

    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_module/",
            }
        ]
    },

};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';

    conf.devtool = isProd ? false : 'eval-source-map'

    return conf;
}
