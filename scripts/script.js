// function Greet(name) {
//   console.log(`hello ${name}`);
// }
// Greet("rohan");
// const Greet = (name)=> {
//     console.log(`hello ${name}`);
//   }
//   Greet("rohan");

// function Greet(name,time = "Day") {
//   console.log(`Good ${time} ${name}`);
// }
// Greet("rohan");

const radiusPara = document.querySelector("#radius");
console.log(radiusPara);
const resultPara = document.querySelector("#result");
console.log(resultPara);

function circleArea(radius) {
  if (isNaN(radius)) {
    resultPara.textContent = "This is not a number"
    // alert("this not a number");
    // returns undefinded by default
  } else {
    const area = Math.PI * radius ** 2;
    return area;
  }
}
let userValue = prompt("Enter a number");
radiusPara.textContent = radiusPara.textContent +=userValue
// prompt always returns a string
let result = circleArea(userValue);
if (result != undefined) {
  resultPara.textContent = 
    `The area of a cricle with radius ${userValue} is ${result.toFixed(2)}`
  ;
}
