// let js = 'amazing';

// // if (js === 'amazing') alert('JavaScript is FUN!');

// // console.log(40 * 2 + 5 - 3);

// // Variable name conventions in javaScript

// let firstName = "Gokul";
// let myFirstJob = 'Associate UI Developer';
// let myCurrentJob = 'Frontend Developer';

// console.log( firstName,`my job is`, myFirstJob );


// let trueValue = true;
// console.log(true);


// // Dynamic Typing

// let year

// console.log(typeof firstName);
// console.log(typeof trueValue);
// console.log(typeof year);


// year = 1999;
// console.log(typeof year);

// // Basic Operators

// const now = 2025;
// const myAge = now - 1999;
// console.log(myAge * 2, myAge + 1, myAge / 2, myAge % 3, 2**2);

// const lastName = 'S';

// console.log(firstName + " " + lastName);

// Assignment Operator

// let x = 15;
// x += 5;
// x++
// x--
// console.log(x);

// // Comparison Operators

// const isGreater = myAge > 26;
// const isGreaterOrEqual = myAge >= 26;

// console.log(isGreater);
// console.log(isGreaterOrEqual);

// Operator Precedence



// TASK 1

// let massMark = 75;
// let heightMark = 1.69;

// let massJohn = 86;
// let heightJohn = 1.78;



// let BMIMark = massMark / (heightMark ** 2);
// let BMIJohn = massJohn / (heightJohn ** 2);

// let BMI_result = BMIMark > BMIJohn;

// console.log(BMIJohn +', '+  BMIMark, BMI_result );


// Template Literals

// const firstName = 'Gokul';
// const Occupation = 'Software Developer';
// const birthYear = 1999;
// const currentYear = new Date().getFullYear();

// const me = `My name is ${firstName} and i'am a ${Occupation} with age of ${currentYear - birthYear}`;
// console.log(me);


// Taking Decisions

// const birthYear = 2010;
// let age = new Date().getFullYear() - birthYear;

// if (age >= 18) {
//     console.log('Person is eligible for applying driving liscence');
// }else{
//     let yearsLeft = 18 - age
//     console.log(`Person should wait for ${yearsLeft} years to apply for driving licence`);

// }


// const birthYear = 1999;

// if(birthYear <= 2000){
//     console.log("Born in 20th century");
// }else{
//     console.log('Born in 21st century');

// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;



// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

// Type Conversion and Coercion

// + is used to concat two strings or values
// on mathematic calculation it needed to be Number() / an numnber


// function abc (){
//     console.log(abc.xyz);

// }
// abc();

// abc.xyz = 400;
// abc.xyz = 200;

// abc();


// let scoreDolphins;
// let scoreKoalas;
// scoreDolphins = (96 + 18 + 89) / 3;
// scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);


// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!');

// } else {
//     console.log('No one wins trophy');

// }


// Switch Statements--

// const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
// console.log(day);

// switch (day) {
//     case 'Monday':
//         console.log("Start of the workweek! Stay motivated.");
//         break;
//     case 'Tuesday':
//         console.log("Keep pushing forward.");
//         break;
//     case 'Wednesday':
//         console.log("Midweek hustle! Almost there.");
//         break;
//     case 'Thursday':
//         console.log("One more day to the weekend!");
//         break;
//     case 'Friday':
//         console.log("Weekend is near! Finish strong.");
//         break;
//     case 'Saturday':
//         console.log("Enjoy your weekend!");
//         break;
//     case 'Sunday':
//         console.log("Relax and recharge for the week ahead.");
//         break;
//     default:
//         console.log("Invalid day.");
// }


// Statement & Expression\

// 4 + 3
// 1999
// true && false && !false

// if(23 > 10){  // expression
//     const x = 5;  // statements
// }


const me = 'Gokul';
const dateOfBirth = 1999; // Declare with 'const' for consistency
let today = new Date();

let currentYear = today.getFullYear(); // Get the current year
let age = currentYear - dateOfBirth; // Calculate age

// console.log(today);
// console.log(`My name is ${me}, I am ${age} years old.`);


////////////////////////////////////
// The Conditional (Ternary) Operator



// if(age >= 18){
//     console.log(`you are ${age},eligible for voting.`)
// }else{
//     console.log(`not eligible to vote`);  
// }

// age >= 18 ? console.log(`you are ${age},eligible for voting.`) : console.log(`not eligible to vote`);


////////////////////////////////////
// Coding Challenge #4

// const bill = 49;

// const tip = bill > 300 ? bill * 0.20   : bill >= 50 && bill <= 300  ? bill * 0.15   : bill * 0.10;
// const total = bill + tip;
// console.log(`The bill was ${bill}.Rs ,the tip was ${tip}.Rs and total value is ${total}`)