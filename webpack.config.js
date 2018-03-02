const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebPackPluginConfig = new HtmlWebPackPlugin({

    template: __dirname +  '/index.html',

    filename: 'index.html', // file name of html generated by webpack in build folder

    inject: 'body' // newly generated script will be placed in <body> tag

});

var ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'css/style.css'
});

module.exports = {

    entry: __dirname + '/src/entry.js',

    module: { //Each "loader" that you add to the loaders array will represent 
              //a transformation that your code will go through before reaching the browser
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) 
            }
        ]
    },

    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },

    plugins:[HtmlWebPackPluginConfig]
};
