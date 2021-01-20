import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PetImage = ({ petPicture: { title, fixed } }) => (
  <div className="p-8 h-full flex justify-center items-center h-full bg-yellow-450 rounded-lg">
    <Img
      alt={title}
      fixed={fixed}
      className="border-4 border-gray-100 rounded-full shadow-md hidden"
    />
  </div>
)

PetImage.propType = {
  PetImage: PropTypes.object,
}

export default PetImage
