import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { RiHome5Line } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi"

export const Home = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <RiHome5Line />
  </IconContext.Provider>
)

Home.defaultProps = {
  className: "text-base text-black",
}

Home.propTypes = {
  className: PropTypes.string,
}

export const UserIcon = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <AiOutlineUser />
  </IconContext.Provider>
)

UserIcon.defaultProps = {
  className: "text-base text-black",
}

UserIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Email = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FiMail />
  </IconContext.Provider>
)

Email.defaultProps = {
  className: "text-base text-black",
}

Email.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Fb = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FiFacebook />
  </IconContext.Provider>
)

Fb.defaultProps = {
  className: "text-sm text-white",
}

Fb.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Ig = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FiInstagram />
  </IconContext.Provider>
)

Ig.defaultProps = {
  className: "text-base text-black",
}

Ig.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const BackIcon = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <BiArrowBack />
  </IconContext.Provider>
)

BackIcon.defaultProps = {
  className: "text-base text-black",
}

BackIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}
