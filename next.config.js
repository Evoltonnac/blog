const path = require('path')

module.exports = {
    trailingSlash: true,
    webpackDevMiddleware: config => ({
        ...config,
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 300,
        },
    }),
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
