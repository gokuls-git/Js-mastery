// const promise1 = new Promise((res, rej) => {
//   res(["Js", "Ts"]);
//   rej("err");
// });

// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchData = async () => {
//   try {
//     const data = await promise1;
//     console.log(data, "DATA");
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchData();

// const getName = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Gokul"), 1000);
//   });
// };

// const getAge = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(25), 1500);
//   });
// };

// const getCity = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Bangalore"), 500);
//   });
// };

// const fetchData = async () => {
//   try {
//     const [name, age, city] = await Promise.all([
//       getName(),
//       getAge(),
//       getCity(),
//     ]);
//     console.log(`${name} is ${age} years old and lives in ${city}`);
//   } catch (error) {
//     console.log("Something went Wrong!", err);
//   }
// };

// fetchData();

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error("Error");
//     }
//     const data = await response.json();
//     console.log("Data:", data);
//   } catch {
//     console.log("Error");
//   }
// };

// fetchData();

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubleArray = array.map((item, i) => item * 2);

// console.log("doubled :", doubleArray);

// filter Even ----

// const filterArray = array.filter((item, i) => item % 2 === 0);
// console.log("filtered array :", filterArray);

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log("Seconds :", i);
//   }, i * 1000);
// }

// console.log(a);
// console.log(b);
// var a = (b = 5);
// -------
// var a = 5;
// console.log(a++);
// console.log(a);

// const arr = [34, 45, 67, 8, 9];
// const sortedArray = arr.sort((a, b) => a - b);
// console.log("Sorted :", sortedArray);

// [];
// console.log([] === false);
