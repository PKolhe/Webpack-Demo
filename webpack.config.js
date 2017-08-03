module.exports = {

    // define entry point
    entry:'./src/script-1.js',
    
    // define output point
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

    // define module and loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node-modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }   
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};