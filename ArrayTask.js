const data = require("./data");
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (let x of f) {
//     console.log("fff", x);
// }

const { max } = require("moment");

// const ages = [11,14, 16,21, 40];
// console.log(ages.every(checkAge));

// function checkAge(age) {
//      return age<20;
// }node 
// const survey = [
//     { name: "Steve", answer: "Yes"},
//     { name: "Jessica", answer: "Yes"},
//     { name: "Peter", answer: "Yes"},
//     { name: "Elaine", answer: "No"}
//   ];

//   let result = survey.every(isSameAnswer);

//   function isSameAnswer(el, index, arr) {
//       console.log("!!!!!!!",el,index,arr);
//     if (index === 0) {
//       return true;
//     } else {
//       return (el.answer === arr[index - 1].answer);
//     }
//   }

let Arry = [222, 779, 10, 7, 77, 89, 5, 15, 60, 55];
const arrayCalulation = (Arr) => {
    let sum = 0;
    let sum1 = 0;
    let maximum = 0;
    let minimum = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        // if (maximum < Arr[i]) {
        //     maximum = Arr[i];
        // }
        // if (minimum > Arr[i]) {
        //     minimum = Arr[i];
        // }
        sum1 = sum1 + Arr[i];
    }

    // maximum = Math.max(...Arr);

    // maximum = Math.max.apply(null,Arr);
    maximum = Arr.sort((a, b) => b - a)[0];
    maximum = Arr.sort((a, b) => a - b)[0];

    // minimum = Math.min(...Arr);
    sum = Arr.reduce((a, b) => a += b, 0);

    console.log("sum", sum, "sum1", sum1, "maximum", maximum, "minimum", minimum);
}
const RemoveDublicateLogin = (data) => {
    // Remove Dublicate in Array
    let newArr = [];
    if (data.length) {
        for (let i = 0; i < data.length; i++) {
            if (newArr.length > 0) {
                let index = newArr.findIndex((itm) => itm.runnerName === data[i].runnerName);
                if (index == -1) {
                    newArr.push(data[i]);
                }

            }
            else {
                newArr.push(data[i]);
            }
        }
    }
    console.log("data", data.length, newArr.length)
}

console.log(RemoveDublicateLogin(data.market.fancyMarkets));