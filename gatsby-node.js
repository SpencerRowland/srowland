const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /slideout/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    })
}
