import React, { useEffect } from "react"

const FBMessenger = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v9.0",
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  })
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="install_email"
        page_id="303146620547418"
        logged_in_greeting="Hi! Thank you for reaching Pet Find PH. Message us for inquiries."
        logged_out_greeting="Thank you for visiting Pet Find PH!"
        theme_color="#fbe260"
      />
    </>
  )
}

export default FBMessenger
