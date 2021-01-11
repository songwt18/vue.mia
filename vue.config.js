module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets":"@/assets",
                "views":"@/views",
                "components":"@/components",
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            // path.resolve(__dirname, 'src/assets/less/variables.less') 
        ]
      }
    }
}
