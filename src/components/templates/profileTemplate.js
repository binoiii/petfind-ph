import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import WelcomeBanner from "./welcomeBanner"
import PetImage from "./petImage"
import OwnerDetails from "./ownerDetails"
import PetDetails from "./petDetails"
import OtherInformation from "./otherInformation"

export const query = graphql`
  query($slug: String!) {
    contentfulPetProfile(slug: { eq: $slug }) {
      id
      petName
      breed
      gender
      age
      birthdate
      food
      ownerName
      homeAddress
      contactInfo1
      contactInfo2
      emailAddress
      otherInformation
      petPicture {
        title
        fixed(width: 250, quality: 100) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

const ProfileTemplate = ({ data }) => {
  const {
    petName,
    breed,
    gender,
    age,
    birthdate,
    food,
    ownerName,
    homeAddress,
    contactInfo1,
    contactInfo2,
    emailAddress,
    otherInformation,
  } = data.contentfulPetProfile

  const petDetails = {
    petName,
    breed,
    gender,
    age,
    birthdate,
    food,
  }

  const ownerDetails = {
    ownerName,
    homeAddress,
    contactInfo1,
    contactInfo2,
    emailAddress,
  }

  const { petPicture } = data.contentfulPetProfile

  return (
    <Layout>
      <div className="my-4 sm:my-8 md:mt-0 mx-4 sm:mx-8 md:mx-20 grid grid-cols-8 grid-rows-8 gap-4 md:gap-8">
        <div className="col-span-8 col-span-4">
          <WelcomeBanner petName={petName} />
        </div>
        <div className="col-span-8 lg:col-span-3">
          <PetImage petPicture={petPicture} />
        </div>
        <div className="col-span-8 lg:col-span-5">
          <PetDetails petDetails={petDetails} />
        </div>
        <div className="col-span-8 lg:col-span-4">
          <OwnerDetails ownerDetails={ownerDetails} />
        </div>
        <div className="col-span-8 lg:col-span-4">
          <OtherInformation otherInformation={otherInformation} />
        </div>
      </div>
    </Layout>
  )
}

export default ProfileTemplate
