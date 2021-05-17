import React from "react"
import PropTypes from "prop-types"

import { Location } from "../icons"

const PetFound = ({ petFoundLink }) => (
  <a href={petFoundLink} target="_blank">
    <div className="p-4 bg-green-450 font-primary text-white text-shadow-md rounded-lg">
      <div className="flex justify-center items-center">
        <Location className="text-xl sm:text-3xl text-red" style={{color: 'red'}} />
        <p className="ml-4 text-l sm:text-xl font-semibold tracking-widest text-red" style={{color: 'red'}}>
          If you found me, <br/> Please Click here to report. ☚
        </p>
      </div>
    </div>
  </a>
)

PetFound.propTypes = {
  petName: PropTypes.string,
}

export default PetFound
