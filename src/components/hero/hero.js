import React from "react"
import BgImage from "./bgimage"

const Hero = () => {
  return (
    <div className="w-full mt-4 sm:mt-8 md:mt-0">
      <BgImage>
        <div className="mt-4 md:mt-0 h-full flex flex-col justify-start items-center">
          <h1 className="m-4 mb-0 md:mt-8 text-white text-xl sm:text-3xl md:text-4xl font-secondary text-center">
            Help your lost pet <br />
            find it's way home
          </h1>
          <div className="mt-6 md:mt-8">
            <button className="btn border-blue-450 bg-blue-450 text-white tracking-widest shadow-lg transition-colors duration-500 ease-out hover:bg-transparent hover:border-white hover:text-white">
              Know more
            </button>
            <button className="btn border-blue-450 bg-transparent text-blue-450 tracking-widest shadow-lg transition-colors duration-500 ease-out hover:bg-transparent hover:border-white hover:text-white">
              Contact us
            </button>
          </div>
        </div>
      </BgImage>
    </div>
  )
}

export default Hero
