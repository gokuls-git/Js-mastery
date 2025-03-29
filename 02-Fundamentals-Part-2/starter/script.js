// 'use strict';

// const calcAverage = (a, b, c) => {
//    return (a + b + c)/3
// };

// console.log(calcAverage(1,2,3));

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins, "scoreDolphins");

// const checkWinner = (avgDolphins, avgKoalas) => {
// avgDolphins > avgKoalas ?console.log(`Dolhins win `);

// }

// const array =  [1, 2, 3, 4, 5 ];

// const doubleArray = array.map((num) => num * 2);

// console.log(doubleArray);

// const filterEven = array.filter((num) => num % 2 === 0);

// console.log(filterEven);

// function myFunc(name) {

//     const greeting = `Hello, ${name}!`;
//     return greeting;
// }

// console.log(myFunc('Gokul'));

// // Create a new <p> element
// const newPara = document.createElement('p');
// newPara.innerText = myFunc('Gokul'); // Set text content

// // Append the <p> element to the body
// document.body.appendChild(newPara);

// const myName = prompt('Name');
// const alertMsg =alert(`Hi ${myName} ,welcome to js`)

// console.log(myName);

// Objects////

// const user = {
//     firstName : "Gokul",
//     lastName : "S",
// }

// console.log(user.firstName);

// for(let i=0; i<=5; i++){

// }

// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000); // Delay increases for each number
// }

// Promise//
// console.log('Start');

// function getData(callBack) {
//     setTimeout(() => {
//         callBack('Debug media')
//     }, 3000)
// }

// getData((callBack) => {

//     console.log(callBack);
// }
// );

// console.log('End');

// const nameEvent = new Promise((resolve, reject) => {
//     name === "Gokul"
//       ? resolve(name)
//       : reject(`Name mismatch, entered name is ${name}`);
// });

// nameEvent
//   .then((name) => {
//     console.log(`His name is ${name}`);
//   })
//   .catch((err) => {
//     console.log(`${err}`);
//   });
const fetchData = new Promise((resolve, reject) => {
  fetch("http://cat-fact.herokuapp.com/facts")
    .then((response) => response.json()) // Return the JSON parsing promise
    .then((data) => {
      console.log("Fetched data:", data);
      resolve(data); // Resolve the outer promise with data
    })
    .catch((error) => {
      console.error("Error:", error);
      reject(error); // Reject on error
    });
});

fetchData.then((data) => console.log("Final Data:", data));
//   .then((data) => console.log("Fetched data:", data))
//   .catch((error) => console.error("Error:", error));

// console.log(a);
// console.log(b);

// var a = (b = 5);

// var a = 5;
// console.log(a++);
// console.log(a);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// const foo = function () {
//   console.log(this.name);
//   //   const bar = () => {
//   //     console.log(this.name);
//   //   };
//   //   bar();
// };

// foo.call({ name: "gokul" });

// function getConcate(nums) {
//   const n = nums.length;
//   const ans = new Array(2 * n);
//   console.log(ans);
//   for (let i = 0; i < n; i++) {
//     ans[i] = nums[i];
//     ans[i + n] = nums[i];
//   }
//   return ans;
// }

// getConcate([1, 2, 3]);

// var smallestEvenMultiple = function (n) {
//   console.log(n % 2);
//   return n % 2 == 0 ? n : 2 * n;
// };
// console.log(smallestEvenMultiple(5));
