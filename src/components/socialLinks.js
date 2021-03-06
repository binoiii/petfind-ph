import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Fb } from "./icons"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      companyLogo: file(relativePath: { eq: "logo/petfindph-logo.jpg" }) {
        childImageSharp {
          fixed(width: 160, quality: 100) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  `)

  const {
    companyLogo: {
      childImageSharp: { fixed },
    },
  } = data

  const socials = [
    {
      social: "facebook",
      icon: (
        <Fb
          className="text-gray-400 transition duration-300 ease-out hover:text-gray-700"
          size="1.5rem"
        />
      ),
      link: "https://www.facebook.com/Pet-Find-PH-103012528511317",
    },
    // {
    //   social: "instagram",
    //   icon: (
    //     <Ig
    //       className="text-gray-400 transition duration-300 ease-out hover:text-gray-700"
    //       size="1.5rem"
    //     />
    //   ),
    //   link: "https://www.instagram.com",
    // },
  ]

  return (
    <div className="px-4 sm:px-8 md:px-0 md:mb-8 h-16 flex items-center justify-between md:block fixed top-0 left-0 right-0 md:static bg-white border-b border-gray-300 md:border-0">
      <div className="mt-1 md:ml-0 block md:hidden">
        <Img alt={fixed.originalName} fixed={fixed} />
      </div>
      <div className="text-center">
        <h5 className="font-primary text-gray-400 font-medium tracking-wider hidden md:block">
          Follow Us
        </h5>
        <div className="flex justify-center">
          {socials.map(({ social, icon, link }) => (
            <div key={social} className="ml-10 sm:ml-14 md:m-4">
              <a href={link} rel="noopener noreferrer" target="_blank">
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
