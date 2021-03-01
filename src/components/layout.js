import React from "react"
import PropTypes from "prop-types"

import Nav from "./navigation/nav"
import SocialLinks from "./socialLinks"
import Footer from "./footer"

import "../styles/global.css"

const Layout = ({ children, showSocials, footer }) => {
  return (
    <div className="m-auto max-w-screen-xl">
      <Nav />
      <main>{children}</main>
      {showSocials && <SocialLinks />}
      <Footer footer={footer} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSocials: PropTypes.bool,
  footer: PropTypes.string,
}

Layout.defaultProps = {
  showSocials: true,
}

export default Layout
