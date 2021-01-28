import React from "react"
import AboutBanner from "./aboutBanner"
import AboutContent from "./aboutContent"
import AboutGoal from "./aboutGoal"
import AboutMission from "./aboutMission"
import AboutVission from "./aboutVission"

const AboutUs = () => {
  return (
    <div className="my-4 sm:my-8 md:mt-0 mx-4 sm:mx-8 md:mx-20">
      <AboutBanner />
      <div className="my-4 md:my-8">
        <AboutContent />
      </div>
      <div className="mb-16 md:mb-8">
        <AboutGoal />
      </div>
      <div className="mb-16 md:mb-8">
        <AboutMission />
      </div>
      <div>
        <AboutVission />
      </div>
    </div>
  )
}

export default AboutUs
