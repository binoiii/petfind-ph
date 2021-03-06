const React = require("react")
// const FBMessenger = require("./src/components/fbmessenger").default

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    {/* <FBMessenger /> */}
  </React.Fragment>
)
