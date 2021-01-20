import React from "react"
import PropTypes from "prop-types"
import { Details } from "../icons"

const OwnerDetails = ({
  ownerDetails: {
    ownerName,
    homeAddress,
    contactInfo1,
    contactInfo2,
    emailAddress,
  },
}) => (
  <div className="p-8 h-full bg-green-450 font-primary text-black text-shadow rounded-lg">
    <div className="mb-6 flex justify-start items-center">
      <Details className="text-2xl sm:text-5xl" />
      <h1 className="ml-4 text-2xl sm:text-3xl font-semibold tracking-widest">
        Owner's Details
      </h1>
    </div>
    <ul className="text-lg tracking-wider">
      <li>
        <span className="font-medium"> Name: </span>
        {ownerName || "n.a"}
      </li>
      <li>
        <span className="font-medium"> Home Address: </span>
        {homeAddress || "n.a"}
      </li>
      <li>
        <span className="font-medium"> Contact Info 1: </span>
        {contactInfo1 || "n.a"}
      </li>
      <li>
        <span className="font-medium"> Contact Info 2: </span>
        {contactInfo2 || "n.a"}
      </li>
      <li>
        <span className="font-medium"> Email Address: </span>
        {emailAddress || "n.a"}
      </li>
    </ul>
  </div>
)

OwnerDetails.propTypes = { ownerDetails: PropTypes.object }

export default OwnerDetails
