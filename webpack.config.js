const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: srcPath,
    resolve: {
      alias: {
        components: path.resolve(srcPath, 'components'),
        styles: path.resolve(srcPath, 'styles')
      },
    },
    entry: {
      index: './index.jsx',
    },
    output:{
        path: distPath,
        filename: 'index.bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          [
                            '@babel/preset-env',
                            {
                              modules: false,
                            },
                          ],
                          '@babel/preset-react',
                        ],
                        plugins: [
                          '@babel/plugin-proposal-class-properties',
                          '@babel/plugin-proposal-object-rest-spread',
                        ],
                    },
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    performance:{
        hints:"warning",
        hints:"error",
        hints:false,
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename){
            return assetFilename.endsWith('.css') || assetFilename.endsWith('jsx');
        }
    },    
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8889,
            proxy: 'http://localhost:9999/'
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
    ],
    devServer: {
        static: distPath,
        compress: true,
        port: 9999,
        historyApiFallback: true,
    }
}