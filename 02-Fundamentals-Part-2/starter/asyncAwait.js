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

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    console.log("Data:", data);
  } catch {
    console.log("Error");
  }
};

fetchData();
