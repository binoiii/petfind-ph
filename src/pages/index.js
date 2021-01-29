import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero.js"
import Features from "../components/features.js"
import How from "../components/how.js"
import Profile from "../components/profile.js"
import Products from "../components/products.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <How />
    <Profile />
    <Products />
  </Layout>
)

export default IndexPage
