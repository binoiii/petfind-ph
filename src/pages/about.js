import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/about/AboutUs"
import BackTop from "../components/utilities/backToTop"

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutUs />
    <BackTop target="about" />
  </Layout>
)

export default About
