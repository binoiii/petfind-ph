import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulPetProfile(slug: { eq: $slug }) {
      slug
      contentful_id
      animal
    }
  }
`

const ProfileTemplate = ({ data }) => {
  const { slug, animal } = data.contentfulPetProfile
  return (
    <div>
      <h1>{slug}</h1>
      <h1>{animal}</h1>
    </div>
  )
}

export default ProfileTemplate
