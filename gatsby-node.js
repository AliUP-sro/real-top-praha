/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const playersList = require('./src/data/players.json')

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    playersList.forEach(player => {
        createPage({
          path: `/player/${player.slug}`,
          component: require.resolve(`./src/templates/player/index.tsx`),
          context: { player },
        })
    })
}