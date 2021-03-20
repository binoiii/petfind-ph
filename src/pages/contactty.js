import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const ContactTy = () => (
  <Layout showSocials={false} footer="fixed">
    <SEO title="Thank you for contacting!" />
    <div
      className="mt-16 md:mt-0 mb-16 lg:mb-20 mx-4 sm:mx-8 md:mx-20 flex flex-col justify-center"
      style={{ height: "200px" }}
    >
      <div>
        <h1 className="mb-8 font-secondary text-blue-350 text-3xl md:text-4xl">
          Thank you for contacting us.
        </h1>
        <p className="mb-8 font-primary text-sm md:text-base text-gray-700 tracking-wide">
          We'll be in touch as soon as possible
        </p>
      </div>
      <Link to="/">
        <span className="font-primary text-sm md:text-base text-yellow-450 font-medium transiton hover:underline flex-start">
          Back to Home
        </span>
      </Link>
    </div>
  </Layout>
)

export default ContactTy
