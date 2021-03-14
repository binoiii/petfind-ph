import React from "react"
import PropTypes from "prop-types"

import { currentYear } from "./utilities/functions"

const Footer = ({ footer }) => (
  <footer
    className={`${
      footer && "fixed bottom-0 right-1/2 transform translate-x-1/2"
    } mb-16 md:mb-0 w-full text-center font-primary text-xs text-gray-300`}
  >
    <div>
      <span className="font-medium">©Petfindph</span>, All rights reserved,{" "}
      {currentYear}
      <br />
      Powered by: <span className="font-medium">AvioTech Solutions</span>
    </div>
  </footer>
)

Footer.propTypes = {
  footer: PropTypes.string,
}

export default Footer
