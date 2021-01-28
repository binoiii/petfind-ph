import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const AboutGoal = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "our-goal.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const goalImage = data.file.childImageSharp.fluid

  return (
    <div className="grid grid-cols-8 gap-8">
      <div className="col-span-8 md:col-span-4">
        <BackgroundImage
          alt={goalImage.originalName}
          fluid={goalImage}
          className="flex justify-center h-xxs md:h-full rounded-lg overflow-hidden"
        >
          <h1 className="self-center text-3xl font-secondary text-yellow-450 text-shadow-md">
            Our Goal
          </h1>
        </BackgroundImage>
      </div>
      <div className="col-span-8 md:col-span-4 bg-yellow-450 rounded-lg">
        <p className="p-8 md:p-12 self-center text-gray-700 font-primary text-justify leading-loose">
          <span className="font-semibold">Our goal</span> is to secure and
          improve the comfort of pets and their owners all over the Philippines
          by ensuring that{" "}
          <span className="font-semibold">
            all pets who have lost their way home
          </span>{" "}
          would get an{" "}
          <span className="font-semibold">
            opportunity to be reunited to their fur parent
          </span>{" "}
          in no time.
        </p>
      </div>
    </div>
  )
}
export default AboutGoal
