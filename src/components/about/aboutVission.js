import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutVission = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "our-vission.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const vissionImage = data.file.childImageSharp.fluid

  return (
    <div className="grid grid-cols-8 gap-8">
      <div className="col-span-8 md:col-span-4">
        <BackgroundImage
          alt={vissionImage.originalName}
          fluid={vissionImage}
          className="flex justify-center h-xxs md:h-full rounded-lg overflow-hidden"
        >
          <h1 className="self-center text-3xl font-secondary text-blue-350 text-shadow-lg">
            Our Vission
          </h1>
        </BackgroundImage>
      </div>
      <div className="col-span-8 md:col-span-4 bg-blue-350 rounded-lg">
        <p className="p-8 md:p-12 self-center text-gray-700 font-primary text-justify leading-loose">
          A world where every{" "}
          <span className="font-semibold">pet is happy</span>,{" "}
          <span className="font-semibold">secured</span>, and{" "}
          <span className="font-semibold">safe</span> in the comfort of their
          home and{" "}
          <span className="font-semibold">
            every lost pet will get to find their way back home
          </span>{" "}
          to their families.
        </p>
      </div>
    </div>
  )
}
export default AboutVission
