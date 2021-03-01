import React from "react"
import PropTypes from "prop-types"

const Footer = ({ footer }) => (
  <footer
    className={`${
      footer && "fixed bottom-0 right-1/2 transform translate-x-1/2"
    } mb-16 md:mb-0 w-full text-center font-primary text-xs text-gray-300`}
  >
    <div>
      <span className="font-medium">©Petfindph</span>, All rights reserved, 2021
      <br />
      Powered by: <span className="font-medium">AvioTech Solutions</span>
    </div>
  </footer>
)

Footer.propTypes = {
  page: PropTypes.string,
}

export default Footer
