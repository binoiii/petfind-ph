import React from "react"
import PropTypes from "prop-types"

import { Paw } from "../icons"

const WelcomeBanner = ({ petName }) => (
  <div className="py-8 sm:p-10 md:p-12 h-full flex flex-col justify-center items-center bg-blue-350 font-secondary text-white text-shadow-md text-center rounded-lg">
    <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider">
      Welcome to
      <br />
      my pet profile
    </h1>
    <h1 className="mb-4 flex flex-col items-center">
      <span className="mb-4 text-2xl sm:text-3xl md:text-4xl tracking-wider">
        my name is{" "}
      </span>
      <span className="text-2xl sm:text-4xl md:text-5xl text-black tracking-wide">{`${petName},`}</span>
    </h1>
    <Paw className="text-4xl text-white" />
  </div>
)

WelcomeBanner.propTypes = {
  petName: PropTypes.string,
}

export default WelcomeBanner
