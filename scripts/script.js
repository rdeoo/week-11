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

// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// console.log(resultPara);

// function circleArea(radius) {
//   if (isNaN(radius)) {
//     resultPara.textContent = "This is not a number"
//     // alert("this not a number");
//     // returns undefinded by default
//   } else {
//     const area = Math.PI * radius ** 2;
//     return area;
//   }
// }
// let userValue = prompt("Enter a number");
// radiusPara.textContent = radiusPara.textContent +=userValue
// // prompt always returns a string
// let result = circleArea(userValue);
// if (result != undefined) {
//   resultPara.textContent =
//     `The area of a cricle with radius ${userValue} is ${result.toFixed(2)}`
//   ;
// }

let myList = ["bread", "cheese", "green pepper"];

function populatelist(shoppingList) {
  // 1. select and store a ref to the ul -> queryselector
  const ullist = document.querySelector(".shopping");
  // 2. loop through the shoppinglist - > for loop
  for (let item of shoppingList) {
    // 3. create an li -> createElement
    const newLi = document.createElement("li");
    // 4. appened the li to the ul -> parent.appenedChild(child)
    ullist.appendChild(newLi);
    // 5. update the textContent of the li with the array item
    newLi.textContent = item;
  }
}
populatelist(myList);


function squareListMaker()
{
  const ullist = document.querySelector(".shopping");
  //remove circleList class on 
  ullist.classList.remove("circleList");
  ullist.classList.add("squareList");
}

squareListMaker()