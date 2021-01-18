import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Home, UserIcon, Email } from "../icons"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      companyLogo: file(relativePath: { eq: "logo/petfindph-logo.jpg" }) {
        childImageSharp {
          fixed(width: 160, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      companyLogoSm: file(relativePath: { eq: "logo/petfindph-logo.jpg" }) {
        childImageSharp {
          fixed(width: 230, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      companyLogoMd: file(relativePath: { eq: "logo/petfindph-logo.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const source = [
    {
      ...data.companyLogo.childImageSharp.fixed,
      media: "(max-width:640px)",
    },
    {
      ...data.companyLogoSm.childImageSharp.fixed,
      media: "(max-width:768px)",
    },
    {
      ...data.companyLogoMd.childImageSharp.fixed,
    },
  ]

  return (
    <div className="flex items-center fixed bottom-0 left-0 right-0 md:static h-24 border-t border-gray-300 md:border-0">
      <header className="mx-4 sm:mx-8 md:mx-20 w-full flex justify-between items-center">
        <div>
          <Link to="/">
            <Img alt="petfindph-logo" fixed={source} />
          </Link>
        </div>
        <nav>
          <div className="flex font-primary font-bold">
            <Link
              className="flex items-center text-gray-400 hover:text-gray-700"
              activeClassName="text-gray-700"
              to="/"
            >
              <Home className="mr-1 mb-.5" size="1.5rem" />
              <span className="text-sm hidden md:block">Home</span>
            </Link>
            <Link
              className="ml-4 sm:ml-12 md:ml-18 flex items-center text-gray-400 hover:text-gray-700"
              activeClassName="text-gray-700"
            >
              <UserIcon className="mr-2" size="1.4rem" />
              <span className="text-sm hidden md:block">About</span>
            </Link>
            <Link
              className="ml-4 sm:ml-12 md:ml-18 flex items-center text-gray-400 hover:text-gray-700"
              activeClassName="text-gray-600"
            >
              <Email className="mr-2" size="1.4rem" />
              <span className="text-sm hidden md:block">Contact</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
