module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.plugins.delete('preload')
    }
}