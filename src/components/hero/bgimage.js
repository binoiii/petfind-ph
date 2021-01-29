import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const BgImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      homeImage: file(relativePath: { eq: "bg-image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { homeImage } = data

  return (
    <div className="mx-4 sm:mx-8 md:mx-20">
      <BackgroundImage
        atl="pet-owner"
        fluid={homeImage.childImageSharp.fluid}
        className="h-sm md:h-md rounded-lg overflow-hidden"
      >
        {children}
      </BackgroundImage>
    </div>
  )
}

BgImage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BgImage
