module.export = {

    entry: __dirname + 'index.html',

    module: { //Each "loader" that you add to the loaders array will represent 
              //a transformation that your code will go through before reaching the browser
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    }
};
