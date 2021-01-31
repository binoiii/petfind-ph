import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

const AboutMission = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "our-mission.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const missionImage = data.file.childImageSharp.fluid

  return (
    <div className="mb-16 md:mb-0 flex flex-col md:flex-row">
      <div className="ml-0 mb-8 md:mb-0 md:ml-8 w-full md:w-6/12 order-1 md:order-2 ">
        <BackgroundImage
          alt={missionImage.originalFileName}
          fluid={missionImage}
          className="flex justify-center h-xxs md:h-full rounded-lg overflow-hidden"
        >
          <h1 className="self-center text-3xl font-secondary text-white text-shadow-lg">
            Our Mission
          </h1>
        </BackgroundImage>
      </div>
      <div className="w-full md:w-6/12 flex bg-gray-100 rounded-lg order-2 md:order-1">
        <Fade bottom distance="30px" delay={400}>
          <p className="p-8 md:p-12 self-center font-primary text-gray-700 text-justify leading-loose">
            <span className="font-semibold">Our Mission</span> is to reunite all
            lost pets to their owners by providing{" "}
            <span className="font-semibold">innovative QR Code activated</span>{" "}
            pet tags with all necessary information uploaded and accessible to
            our <span className="font-semibold">Pet Profile Database</span>{" "}
            making it easier to find lost pets. It is our company’s mission to
            provide comfort and relief for both pet and owners.
          </p>
        </Fade>
      </div>
    </div>
  )
}
export default AboutMission
