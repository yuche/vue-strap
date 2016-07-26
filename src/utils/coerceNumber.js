// Attempt to convert a string value to a Number.
// Otherwise, return 0.
export default (val, alt = null) => typeof val === 'number' ? val
  : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val)
