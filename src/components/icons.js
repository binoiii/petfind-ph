import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import { FaPaw } from "react-icons/fa"
import { RiHome5Line } from "react-icons/ri"
import {
  AiOutlineUser,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { BsCardList } from "react-icons/bs"
import { GrStatusInfo } from "react-icons/gr"
import { ImQrcode } from "react-icons/im"
import { SiDatadog } from "react-icons/si"
import { GiReceiveMoney, GiWaterSplash } from "react-icons/gi"
import { Ri24HoursFill } from "react-icons/ri"
import { MdLooksOne } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import { IoIosArrowDropup } from "react-icons/io"

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
    <AiOutlineFacebook />
  </IconContext.Provider>
)
Fb.defaultProps = {
  className: "text-base text-black",
}

Fb.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Ig = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <AiOutlineInstagram />
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

export const Paw = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <FaPaw />
  </IconContext.Provider>
)

FaPaw.defaultProps = {
  className: "text-base text-black",
}

FaPaw.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Details = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <BsCardList />
  </IconContext.Provider>
)

Details.defaultProps = {
  className: "text-base text-black",
}

Details.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Info = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <GrStatusInfo />
  </IconContext.Provider>
)

Info.defaultProps = {
  className: "text-base text-black",
}

Info.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const First = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <MdLooksOne />
  </IconContext.Provider>
)

First.defaultProps = {
  className: "text-base text-black",
}

First.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const Affordable = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <GiReceiveMoney />
  </IconContext.Provider>
)

Affordable.defaultProps = {
  className: "text-base text-black",
}

Affordable.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const QR = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <ImQrcode />
  </IconContext.Provider>
)

ImQrcode.defaultProps = {
  className: "text-base text-black",
}

ImQrcode.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const PetProfile = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <SiDatadog />
  </IconContext.Provider>
)

PetProfile.defaultProps = {
  className: "text-base text-black",
}

PetProfile.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const AllDay = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <Ri24HoursFill />
  </IconContext.Provider>
)

AllDay.defaultProps = {
  className: "text-base text-black",
}

AllDay.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const WaterResitant = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <GiWaterSplash />
  </IconContext.Provider>
)

WaterResitant.defaultProps = {
  className: "text-base text-black",
}

WaterResitant.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

export const BackToTop = ({ className, size }) => (
  <IconContext.Provider value={{ className, size }}>
    <IoIosArrowDropup />
  </IconContext.Provider>
)

BackToTop.defaultProps = {
  className: "text-base text-black",
}

BackToTop.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}
