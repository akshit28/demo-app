const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    configureWebpack: {
        resolve: {
            fallback: {
                path: require.resolve('path-browserify'),
                // Add other polyfills here if needed
            }
        }
    }
});
