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

function circleArea(radius)
{   if (isNaN(radius))
    {
    alert("this not a number");
    // returns undefinded by default
}else{
    const area = Math.PI * radius **2;
    return area
}
}
let userValue = prompt("Enter a number")
// prompt always returns a string
let result = circleArea(userValue)
alert(`The area of a cricle with radius ${userValue} is ${result.toFixed(2)}`)
circleArea()