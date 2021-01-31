import React from "react"
import { Link } from "react-scroll"
import PropTypes from "prop-types"
import { BackToTop } from "../icons"

const BackTop = ({ target }) => {
  return (
    <div>
      <Link to={target} smooth offset={-100}>
        <BackToTop className="mx-auto my-2 text-lg text-gray-300 transition duration-400 ease-out hover:text-gray-700" />
      </Link>
    </div>
  )
}

BackTop.propTypes = {
  target: PropTypes.string,
}

export default BackTop
