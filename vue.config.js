const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('preload')
    },
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin(), new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        })]
    }
}