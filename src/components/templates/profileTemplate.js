import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulPetProfile(slug: { eq: $slug }) {
      contentful_id
      picture {
        fluid(maxWidth: 400, quality: 100, cropFocus: CENTER, maxHeight: 400) {
          base64
        }
        petName
        breed
        gender
        food
        birthday(formatString: "YYYY/MM/DD")
        food
        ownerName
        homeAddress
        contactInfo1
        contactInfo2
        otherInformation
      }
    }
  }
`

const ProfileTemplate = ({ data }) => {
  const { petName, ownerName } = data.contentfulPetProfile
  return (
    <div>
      <h1>{petName}</h1>
      <h1>{ownerName}</h1>
    </div>
  )
}

export default ProfileTemplate
