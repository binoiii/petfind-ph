import React from "react"
import Fade from "react-reveal/Fade"

import {
  First,
  Affordable,
  QR,
  PetProfile,
  AllDay,
  WaterResitant, 
  Location,
} from "./icons"

const Features = () => {
  const features = [
    {
      feature: "First in PH",
      icon: <First className="text-4xl md:text-6xl text-white" />,
      description:
        "First ever provider of QR Code Activated Pet Tags in the Philippines",
    },
    {
      feature: "Smart Pet Technology",
      icon: <QR className="text-4xl md:text-6xl text-white" />,
      description: "Scan pet tag with any smart phone or tablet",
    }, 
    {
      feature: "GPS Notification",
      icon: <Location className="text-4xl md:text-6xl text-white" />,
      description: "Owners will receive Instant Email Alert with the GPS location of their Pet after being reported by the Pet Founder.",
    },
    {
      feature: "Affordable",
      icon: <Affordable className="text-4xl md:text-6xl text-white" />,
      description: "Affordable pet tags with numerous designs to choose from",
    },
    {
      feature: "Online Pet Profile",
      icon: <PetProfile className="text-4xl md:text-6xl text-white" />,
      description:
        "Includes vital information to the finders when your pet goes missing, such pet medical conditions, allergies, dietary needs and more",
    },
    {
      feature: "Available 24/7",
      icon: <AllDay className="text-4xl md:text-6xl text-white" />,
      description: "Pet Profile is accessible 24/7",
    },
    {
      feature: "Water Resistant",
      icon: <WaterResitant className="text-4xl md:text-6xl text-white" />,
      description: "Tag is permanent and highly water resistant",
    },
  ]

  return (
    <div
      id="features"
      className="my-10 md:my-16 lg:my-20 mx-4 sm:mx-8 md:mx-20"
    >
      <h2 className="mb-4 font-secondary text-2xl md:text-3xl text-gray-700 text-center text-shadow-md">
        Product Features
      </h2>
      <div className="flex flex-wrap justify-center">
        {features.map(({ feature, icon, description }, i) => (
          <div
            key={feature}
            className="m-5 md:m-10 w-28 sm:w-40 md:w-56 flex flex-col"
          >
            <div className="mb-8 h-20 md:h-28 w-20 md:w-28 self-center flex justify-center items-center bg-blue-350 shadow-md rounded-full">
              {icon}
            </div>
            <Fade bottom distance="30px" delay={i * 200}>
              <h4 className="mb-8 font-primary text-gray-700 text-sm md:text-base font-semibold tracking-wider text-center">
                {feature}
              </h4>
              <p className="font-primary text-gray-700 text-sm md:text-base text-center tracking-wide leading-snug">
                {description}
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
