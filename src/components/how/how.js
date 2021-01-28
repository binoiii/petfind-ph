import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const How = () => {
  const data = useStaticQuery(graphql`
    query {
      getTag: file(relativePath: { eq: "how/get-tag.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      lostPet: file(relativePath: { eq: "how/lost-pet.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      findPet: file(relativePath: { eq: "how/find-pet.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      reunitePet: file(relativePath: { eq: "how/reunite-pet.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const { getTag, lostPet, findPet, reunitePet } = data

  const steps = [
    {
      step: "Get",
      image: getTag,
      header: "1. Get a Pet QR Code Tag and create a profile for your pet",
      description:
        "Keep your contact details and pet's critical information up-to-date",
    },
    {
      step: "Lost",
      image: lostPet,
      header: "2. If your pet goes missing",
      description:
        "Make sure you have enabled all critical information so finder can view them through your pet's profile",
    },
    {
      step: "Find",
      image: findPet,
      header:
        "3. Finder will scan the Pet QR Code Tag and it will be redirected to your pet's profile",
      description:
        "Any one with a smart phone can scan the tag to view your contact details and pet's critical information",
    },

    {
      step: "Reunite",
      image: reunitePet,
      header: "4. Reunited with your pet",
      description:
        "With the detailed contact information finders can contact you immediately and your pet gets home faster",
    },
  ]

  return (
    <div className="my-10 md:16 lg:my-20 mx-4 sm:mx-8 md:mx-20">
      <h2 className="mb-4 font-secondary text-2xl md:text-3xl text-gray-700 text-center text-shadow-md">
        How it Works
      </h2>
      <div className="flex flex-wrap justify-center">
        {steps.map(
          ({
            step,
            image: {
              childImageSharp: { fluid },
            },
            header,
            description,
          }) => (
            <div key={step} className="m-5 w-52 border border-2 rounded-lg">
              <div className="flex justify-center items-center">
                <Img
                  alt={fluid.originalName}
                  fluid={fluid}
                  className="w-52 overflow-hidden rounded-t-lg"
                />
              </div>
              <div className="p-4 font-primary text-gray-700 text-center">
                <h4 className="p-4 font-semibold text-sm">{header}</h4>
                <p className="leading-normal tracking-wide text-xs">
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default How
