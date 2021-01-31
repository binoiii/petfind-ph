import React from "react"
import PropTypes from "prop-types"

import Nav from "./navigation/nav"
import SocialLinks from "./socialLinks"
import Footer from "./footer"

import "../styles/global.css"

const Layout = ({ children, showSocials }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      {showSocials && <SocialLinks />}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.propTypes = {
  showSocials: PropTypes.bool,
}

Layout.defaultProps = {
  showSocials: true,
}

export default Layout
