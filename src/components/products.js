import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      productOne: file(relativePath: { eq: "products/product-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      productTwo: file(relativePath: { eq: "products/product-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
      productThree: file(relativePath: { eq: "products/product-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const { productOne, productTwo, productThree } = data

  return (
    <div className="my-10 md:my-16 lg:my-20 mx-4 sm:mx-8 md:mx-20">
      <h2 className="mb-4 font-secondary text-2xl md:text-3xl text-gray-700 text-center text-shadow-md">
        Our Products
      </h2>
      <div className="flex justify-center flex-wrap">
        <div className="m-4 p-8 bg-red-350 rounded-lg">
          <Img
            alt={productOne.childImageSharp.fluid.originalName}
            fluid={productOne.childImageSharp.fluid}
            className="w-xxs m-4 rounded-full shadow-md"
          />
          <h5 className="mt-8 font-primary text-gray-700 font-semibold text-center tracking-wider">
            ProductOne
          </h5>
        </div>
        <div className="m-4 p-8 bg-yellow-450 rounded-lg">
          <Img
            alt={productTwo.childImageSharp.fluid.originalName}
            fluid={productTwo.childImageSharp.fluid}
            className="w-xxs m-4 rounded-full shadow-md"
          />
          <h5 className="mt-8 font-primary text-gray-700 font-semibold text-center tracking-wider">
            ProductOne
          </h5>
        </div>
        <div className="m-4 p-8 bg-blue-350 rounded-lg">
          <Img
            alt={productThree.childImageSharp.fluid.originalName}
            fluid={productThree.childImageSharp.fluid}
            className="w-xxs m-4 rounded-full shadow-md"
          />
          <h5 className="mt-8 font-primary text-gray-700 font-semibold text-center tracking-wider">
            ProductOne
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Products
