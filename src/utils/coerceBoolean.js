// Attempt to convert a string value to a Boolean. Otherwise, return the value
// without modification so Vue can throw a warning.
export default (val) => (typeof val !== "string" ? val :
  val === "true" ? true :
  val === "false" ? false :
  val === "null" ? false :
  val === "undefined" ? false : val)
