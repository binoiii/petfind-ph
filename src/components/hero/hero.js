import React from "react"
import { Link } from "gatsby"
import BgImage from "./bgimage"
import Fade from "react-reveal/Fade"

const Hero = () => {
  return (
    <div id="hero" className="w-full mt-16 md:mt-0 mb-10">
      <BgImage>
        <Fade bottom distance="30px" delay={300}>
          <div className="mt-4 md:mt-0 h-full flex flex-col justify-start items-center">
            <h1 className="m-4 mb-0 md:mt-8 text-white text-xl sm:text-3xl md:text-4xl font-secondary text-center">
              Help your lost pet <br />
              find it's way home
            </h1>
            <div className="mt-6 md:mt-8">
              <button className="mr-2 btn border-blue-450 bg-blue-450 text-white tracking-widest shadow-lg transition-colors duration-500 ease-out hover:bg-transparent hover:border-white hover:text-white outline-none focus:outline-none">
                <a
                  href="https://forms.gle/uWVgKPTXmHEwDQEE6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Activate Tag
                </a>
              </button>
              <button className="btn border-blue-450 bg-transparent text-blue-450 tracking-widest shadow-lg transition-colors duration-500 ease-out hover:bg-transparent hover:border-white hover:text-white outline-none focus:outline-none">
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </Fade>
      </BgImage>
    </div>
  )
}

export default Hero
