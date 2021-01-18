import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      companyLogo: file(relativePath: { eq: "logo/petfindph-logo.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { companyLogo } = data

  return (
    <div className="flex items-center h-20 ">
      <header className="mx-6 sm:mx-10 md:mx-20 w-full flex justify-between items-center fixed bottom-0 left-0 md:static">
        <div>
          <Img alt="petfindph-logo" fixed={companyLogo.childImageSharp.fixed} />
        </div>
        <nav>
          <div className="font-primary font-bold">
            <Link to="/404">
              <span>Home</span>
            </Link>
            <Link className="ml-4 sm:ml-8 md:ml-20">About</Link>
            <Link className="ml-4 sm:ml-8 md:ml-20">Contact</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
