import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Fb, Ig } from "./icons"

const SocialLinks = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       companyLogo: file(relativePath: { eq: "logo/petfindph-logo2.jpg" }) {
  //         childImageSharp {
  //           fixed(width: 160, quality: 100) {
  //             ...GatsbyImageSharpFixed
  //             orginalName
  //           }
  //         }
  //       }
  //   `)

  //   const {
  //     companyLogo: {
  //       childImageSharp: { fixed },
  //     },
  //   } = data

  const socials = [
    {
      social: "facebook",
      icon: (
        <Fb className="text-gray-400 text-3xl transition duration-300 ease-out hover:text-gray-700" />
      ),
      link: "https://www.facebook.com/zionphilippines2020",
    },
    {
      social: "instagram",
      icon: (
        <Ig className="text-gray-400 text-3xl transition duration-300 ease-out hover:text-gray-700" />
      ),
      link: "https://www.instagram.com/zion_philippines",
    },
  ]

  return (
    <div className="mb-8 text-center">
      <h5 className="font-primary text-gray-400 font-medium tracking-wider">
        Follow Us
      </h5>
      <div className="flex justify-center">
        {socials.map(({ social, icon, link }) => (
          <div key={social} className="m-4">
            <a href={link} rel="noopener noreferrer" target="_blank">
              {icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
