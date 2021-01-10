const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allContentfulPetProfile {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulPetProfile.edges.forEach(({ node: { slug } }) =>
    createPage({
      path: `/pet/${slug}`,
      component: path.resolve(`./src/components/templates/profileTemplate.js`),
      context: {
        slug,
      },
    })
  )
}
