// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);

//   // reject("Failed");
// });

// promise.then((response) => {
//   console.log(response);
// });

// const getDataPromiseAPI1 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num);
//     }, 1000);
//   });
// };

// const getDataPromiseAPI2 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num);
//     }, 1000);
//   });
// };

// const getDataPromiseAPI3 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num);
//     }, 1000);
//   });
// };

// let num1, num2, num3;

// getDataPromiseAPI1(4)
//   .then((response) => {
//     num1 = response;
//     console.log(num1);
//     return getDataPromiseAPI2(2);
//   })
//   .then((response) => {
//     num2 = response;
//     console.log(num2);
//     return getDataPromiseAPI3(3);
//   })
//   .then((resolve) => {
//     num3 = resolve;
//     console.log(num3);
//     console.log(num1 + num2 + num3, "APIADDED");
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// Promise.all/allSettled Meathod any meathod rarely used /race--

// const promiseOne = new Promise((resolve, reject) => {
//   resolve(["JavaScript", "Java"]);
// });
// const promiseTwo = new Promise((resolve, reject) => {
//   // resolve(["React", "Angular"]);
//   reject("Error");
// });

// const allPromise = Promise.all([promiseOne, promiseTwo]);

// allPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Basic Promise---
// const newPromise = new Promise((resolve, reject) => {
//   let success = true;
//   success ? resolve("Promise Resolved") : reject("Promise Rejected");
// });
// newPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// WithSetTimeOut--

// const newPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise Resolved");
//   }, 2000);
// });

// // newPromise
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => {
// //     console.log(error, "Rejected");
// //   });

// const fetchData = async () => {
//   try {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const response = await newPromise;
//     console.log(response);
//   } catch {
//     console.log("Error");
//   }
// };

// fetchData();

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Data:", data);
//     })
//     .catch((error) => {
//       console.log(error, "Error");
//     });
// };

// fetchData();
