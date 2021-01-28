import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero.js"
import Features from "../components/features/features.js"
import How from "../components/how/how.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <How />
  </Layout>
)

export default IndexPage
