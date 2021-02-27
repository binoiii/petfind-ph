import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import ContactUs from "../components/contact/contactUs"
import BackTop from "../components/utilities/backToTop"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactUs />
    <BackTop target="contact" />
  </Layout>
)

export default Contact
