module.exports = {
    chainWebpack: config => {
        // remove the prefetch plugin
        config.plugins.delete('prefetch')
    }
}