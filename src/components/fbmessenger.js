/*global FB*/

import React, { useEffect } from "react"

const FBMessenger = () => {

  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })

  return (
    <>
    <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="103012528511317"
      />
    </>
  )
}

export default FBMessenger
