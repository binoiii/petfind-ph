import React from "react"
import BgImage from "./bgimage"

const Hero = () => {
  return (
    <div className="w-full">
      <BgImage>
        <div className="pb-12 h-full flex flex-col justify-end items-center">
          <h1 className="text-black text-4xl">
            Help your lost pet find it's way home
          </h1>
          <div>
            <button>Know more</button>
          </div>
        </div>
      </BgImage>
    </div>
  )
}

export default Hero
