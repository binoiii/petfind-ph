import React from "react"
import PropTypes from "prop-types"

import Nav from "./navigation/nav"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer className="mb-24 md:mb-0 text-center font-primary text-xs text-gray-300">
        <span className="font-medium">©Petfindph</span>, All rights reserved,
        2021
        <br />
        Powered by: <span className="font-medium">AvioTech Solutions</span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
