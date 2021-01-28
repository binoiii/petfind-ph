import React from "react"

const AboutContent = () => (
  <div className="p-8 md:p-16 flex flex-col items-center">
    <div className="mb-8 md:mb-16">
      <h1 className="mb-6 text-3xl font-primary text-gray-700 font-semibold">
        Our Team
      </h1>
      <p className="self-center font-primary text-gray-700 text-justify leading-loose">
        We are simply a group of individuals who have deep concern and care
        about animals. The functionality of{" "}
        <span className="font-semibold">
          our product is made with love and concern
        </span>{" "}
        for your four-legged friends.
      </p>
    </div>
    <div>
      <h1 className="mb-6 self-start text-3xl font-primary text-gray-700 font-semibold">
        Our Technology
      </h1>
      <p className="font-primary text-gray-700 text-justify leading-loose">
        PET TAG PH is the{" "}
        <span className="font-semibold">
          first ever provider of QR Code Activated Pet Tags in the Philippines
        </span>
        . We're committed to improving and enriching the lives of pets and their
        owners all over the Philippines by providing pet tags and{" "}
        <span className="font-semibold">innovative pet finder platforms</span>{" "}
        for a more happier environment where no pets are lost from their
        families.
      </p>
    </div>
  </div>
)

export default AboutContent
