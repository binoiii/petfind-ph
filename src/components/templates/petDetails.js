import React from "react"
import PropTypes from "prop-types"
import { Details } from "../icons"

const PetDetails = ({
  petDetails: { petName, breed, gender, age, birthdate, food },
}) => (
  <div className="p-8  h-full bg-purple-450 font-primary text-white text-shadow-md rounded-lg">
    <div className="mb-6 flex justify-start items-center">
      <Details className="text-2xl sm:text-5xl text-white" />
      <h1 className="ml-4 text-2xl sm:text-3xl font-semibold tracking-widest">
        Pet's Details
      </h1>
    </div>
    <ul className="text-lg tracking-wider">
      <li>
        <span className="font-medium"> Name: </span>
        {petName || "n.a"}
      </li>
      <li>
        <span className="font-medium">Breed Type: </span>
        {breed || "n.a"}
      </li>
      <li>
        <span className="font-medium">Gender: </span>
        {gender || "n.a"}
      </li>
      <li>
        <span className="font-medium">Age: </span>
        {age || "n.a"}
      </li>
      <li>
        <span className="font-medium">Birthdate: </span>
        {birthdate || "n.a"}
      </li>
      <li>
        <span className="font-medium">Type of Food: </span>
        {food || "n.a"}
      </li>
    </ul>
  </div>
)

PetDetails.propTypes = {
  petDetails: PropTypes.object,
}

export default PetDetails
