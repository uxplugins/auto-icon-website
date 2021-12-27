const path = require("path");
const data = require("./src/assets/data/data");
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  data.forEach(({slug, title, description}) => {
    createPage({
      path: slug,
      component: path.resolve("./src/templates/Generic.js"),
      context: {
        title: title,
        description: description,
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
