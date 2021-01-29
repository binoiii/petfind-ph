import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      laptopImage: file(relativePath: { eq: "profile/laptop-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      mobileImage: file(relativePath: { eq: "profile/mobile-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const { laptopImage, mobileImage } = data

  return (
    <div className="my-10 md:my-16 lg:my-20 mx-4 sm:mx-8 md:mx-20">
      <h2 className="mb-4 font-secondary text-2xl md:text-3xl text-gray-700 text-center text-shadow-md">
        Our Pet Profile
      </h2>
      <div className="flex justify-center flex-col sm:flex-row">
        <div className="m-4 p-8 bg-yellow-450 rounded-lg">
          <Img
            alt={laptopImage.childImageSharp.fluid.originalName}
            fluid={laptopImage.childImageSharp.fluid}
            className="sm:w-80"
          />
        </div>
        <div className="m-4 p-8 sm:px-14 sm:py-20 md:p-20 bg-gray-100 rounded-lg sm:self-center">
          <Img
            alt={mobileImage.childImageSharp.fluid.originalName}
            fluid={mobileImage.childImageSharp.fluid}
            className="m-auto sm:m-0 w-12"
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
