import React from "react"
import ContactBanner from "./contactBanner"
import ContactForm from "./contactForm"

const ContactUs = () => {
  return (
    <div className="mt-16 md:mt-0 mb-16 lg:mb-20 mx-4 sm:mx-8 md:mx-20 grid grid-cols-8 gap-4 md:gap-8">
      <div className="flex flex-col justify-center col-span-8 lg:col-span-4 order-2 lg:order-1">
        <h1 className="md:mb-8 md:text-4xl font-secondary text-gray-700 text-center text-shadow-sm hidden lg:block">
          Contact Us
        </h1>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="col-span-8 lg:col-span-4 order-1 lg:order-2">
        <ContactBanner />
      </div>
    </div>
  )
}

export default ContactUs
