import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

const AboutBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-dog.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const aboutImage = data.file.childImageSharp.fluid

  return (
    <div className="pt-4 sm:pt-8 md:pt-0 overflow-hidden">
      <BackgroundImage
        alt={aboutImage.originalName}
        fluid={aboutImage}
        className="h-xs sm:h-sm flex justify-center rounded-lg overflow-hidden"
      >
        <Fade bottom distance="30px" delay={300}>
          <h1 className="self-center text-4xl sm:text-5xl font-secondary text-white text-center text-shadow-sm">
            About Us
          </h1>
        </Fade>
      </BackgroundImage>
    </div>
  )
}

export default AboutBanner
