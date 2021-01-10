import React from "react"
import { useStaticQuery, query } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const BgImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      homeImage: file(relativePath: { eq: "bg-image/bg-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { homeImage } = data

  //   const { homeImage, homeImageMd, homeImageSm } = data

  //   const source = [
  //     { ...homeImageSm.childImageSharp.fluid },
  //     { ...homeImageMd.childImageSharp.fluid, media: "(min-width:576px)" },
  //     { ...homeImage.childImageSharp.fluid, media: "(min-width:768px)" },
  //   ]

  return (
    <div className="mx-6 sm:mx-10 md:mx-20 border border-gray-200 rounded-lg">
      <BackgroundImage
        atl="pet-owner"
        fluid={homeImage.childImageSharp.fluid}
        className="h-sm md:h-md"
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
