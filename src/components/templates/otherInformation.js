import React from "react"
import PropTypes from "prop-types"

import { Info } from "../icons"

const OtherInformation = ({ otherInformation }) => (
  <div className="p-8 h-full bg-red-350 font-primary text-black text-shadow rounded-lg">
    <div className="mb-6 flex justify-start items-center">
      <Info className="text-3xl sm:text-4xl" />
      <h1 className="ml-4 text-2xl sm:text-3xl font-semibold tracking-widest">
        Other Information
      </h1>
    </div>
    <div className="text-lg tracking-wider">
      <p className="mb-4 font-medium">
        May include pet's allergy, medication, disabilities, special needs,
        fears, vet's phone number, etc...
      </p>
      <p>{otherInformation || "n.a"}</p>
    </div>
  </div>
)

OtherInformation.propTypes = {
  otherInformation: PropTypes.string,
}

export default OtherInformation
