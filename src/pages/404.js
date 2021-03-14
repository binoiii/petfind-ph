import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <Layout showSocials={false} footer="fixed">
    <SEO title="404: Not found" />
    <div
      className="mt-16 md:mt-0 mb-16 lg:mb-20 mx-4 sm:mx-8 md:mx-20 flex flex-col justify-center"
      style={{ height: "200px" }}
    >
      <div>
        <h1 className="mb-4 font-secondary text-blue-350 text-3xl md:text-4xl">
          NOT FOUND :(
        </h1>
        <p className="mb-8 font-primary text-sm md:text-base text-gray-700 tracking-wide">
          You just hit a route that doesn&#39;t exist...
        </p>
      </div>
      <Link to="/">
        <span className="font-primary text-sm md:text-base text-yellow-450 transiton hover:underline flex-start">
          Back to Home
        </span>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
