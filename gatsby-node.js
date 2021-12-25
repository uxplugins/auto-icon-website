const path = require("path");
const data = require("./src/assets/data/data");
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  data.forEach((page) => {
    createPage({
      path: page.slug,
      component: path.resolve("./src/templates/Generic.js"),
      context: {
        title: page.title,
        description: page.description,
      },
      defer:true,
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
};
