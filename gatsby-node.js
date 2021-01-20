const path = require("path")

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type ContentfulPetProfile implements Node @infer {
      slug: String
      petName: String
      breed: String
      gender: String
      age: Int
      birthdate: Date
      food: String
      ownerName: String
      homeAddress: String
      contactInfo1: String
      contactInfo2: String
      emailAddress: String
      otherInformation: String
    }
  `
  createTypes(typeDefs)
}

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
