const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('preload')
    },
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    }
}