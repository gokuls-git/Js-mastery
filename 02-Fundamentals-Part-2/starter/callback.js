// Event Loop---
// setTimeout(() => {
//   console.log("HI");
// }, 0);
// console.log("running 1");
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i <= array.length - 1; i++) {
//   console.log(array[i]);
// }

// for (let i = 0; i <= 9; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 500);
// }

// function outerFunction(callback) {
//   function innerFunction() {
//     console.log("Inner function doing stuff...");
//     callback("Hello from inner function");
//   }

//   console.log("Outer function starts");
//   innerFunction(); // We call the inner, and it calls the callback
// }

// outerFunction((msg) => {
//   console.log("CAllback received :", msg);
// });
// console.log("running 3");

// function sayHi(name) {
//   console.log("Hi", name);
// }

// function greet(callback) {
//   callback("Gokul");
// }
// greet((value) => console.log(value));

// greet(sayHi); // Output: Hi Gokul

// const printMessage = (message) => {
//   console.log("Printed Message : ", message);
// };

// const deliver = (callback) => {
//   callback("My name is Gokul");
// };

// deliver(printMessage);

// const getData = (callBack) => {
//   const data = "Data from server";
//   setTimeout(() => {
//     callBack(data);
//   }, 3000);
// };

// getData((msg) => {
//   console.log("Callback received : ", msg);
// });

const getDataFromAPI1 = (callback) => {
  setTimeout(() => {
    callback(5);
  }, 1000);
};

const getDataFromAPI2 = (callback) => {
  setTimeout(() => {
    callback(2);
  }, 1000);
};

const getDataFromAPI3 = (callback) => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

// Callback Hell---
getDataFromAPI1((num1) => {
  console.log(num1, "API1");
  getDataFromAPI2((num2) => {
    console.log(num2, "API2");
    getDataFromAPI3((num3) => {
      console.log(num3, " API3");
      let total = 0;
      total = num1 + num2 + num3;
      console.log("Total : ", total);
    });
  });
});



