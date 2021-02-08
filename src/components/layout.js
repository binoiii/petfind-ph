import React from "react"
import PropTypes from "prop-types"

import Nav from "./navigation/nav"
import SocialLinks from "./socialLinks"
import Footer from "./footer"

import "../styles/global.css"

const Layout = ({ children, showSocials }) => {
  return (
    <div className="m-auto max-w-screen-xl">
      <Nav />
      <main>{children}</main>
      {showSocials && <SocialLinks />}
      <Footer />
    </div>
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
