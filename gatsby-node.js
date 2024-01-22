/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
const fs = require('fs');
const path = require('path');

exports.onPreInit = () => {
  const imagesDirectory = path.join(__dirname, 'src', 'images');
  
  try {
    const files = fs.readdirSync(imagesDirectory);
    console.log('Files in src/images directory:', files);
  } catch (error) {
    console.error('Error reading src/images directory:', error);
  }
};

