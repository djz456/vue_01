const path = require('path')

// const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')



var htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: "development",//development , production
    plugins: [
        htmlPlugin,
        new VueLoaderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
            // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
            {
                test: /.(png|gif|jpg|svg|ttf)$/,
                use: [
                    'file-loader'
                ]}
    
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    }
}