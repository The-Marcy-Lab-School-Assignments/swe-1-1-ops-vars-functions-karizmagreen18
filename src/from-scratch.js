// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  // TODO: Calculate and return the area of a rectangle
  return width * height
};

const isEven = (number) => {
  // TODO: Return true if the number is even, false if odd
  if (number % 2 === 0 ){
    console.log(true)
  } else if (number % 2 !== 0){
    console.log(false)
  }
}; isEven(21)

const convertToFahrenheit = (celsius) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  let fahrToCel = (celsius * 9 /5) + 32;
  return fahrToCel;
};

// String & Variable Functions
const createGreeting = (name) => {
  // TODO: Return a greeting string like "Hello, [name]!"
  let createGreeting = `Hello, ${name}! `
};

const getInitials = (firstName, lastName) => {
  // TODO: Return initials by taking first letter of each name
  let firstN = firstName[0];
  let lastN = lastName[0];
  return firstN + lastN;
};

const formatPrice = (price) => {
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")


};

// Function Logic Functions
const getLarger = (num1, num2) => {
  // TODO: Return the larger of the two numbers
  if (num1 > num2){
    console.log(`${num1}`)
  } else if (num2 > num1){
    console.log`${num2}`
  }

};
getLarger(1,  4)
const isValidAge = (age) => {
  // TODO: Return true if age is between 0 and 120, false otherwise
  if (age <= 120 && age > 0){
    return true
  } else {
    return false
  }
};

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
