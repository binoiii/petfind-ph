import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ContactBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-dog.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const contactImage = data.file.childImageSharp.fluid

  return (
    <div className="mt-4 sm:mt-8 md:mt-0 overflow-hidden">
      <BackgroundImage
        alt={contactImage.originalName}
        fluid={contactImage}
        className="h-xs sm:h-sm md:h-md rounded-lg overflow-hidden"
      >
        <h1 className="mt-8 md:mt-14 text-3xl sm:text-4xl font-secondary text-white text-center text-shadow-sm lg:hidden">
          Contact Us
        </h1>
      </BackgroundImage>
    </div>
  )
}

export default ContactBanner
