import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const Fb = ({ url, title, description, image, alt }) => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={alt} />
  </Helmet>
)

export default Fb

Fb.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Fb.defaultProps = {
  title: "Pet Find PH",
  description: "Help your lost pet find its way home",
  alt: "Pet Find PH",
}
