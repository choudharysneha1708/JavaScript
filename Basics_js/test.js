// let name = "sneha";
// var state = "Bihar";
// let age = 18;
// // data type
// /*
//     number=> 2 ^53
//     bigint
//     string => ""
//     boolena => true/false
//     null => standalone value ~ empty value  null is of object type
//     underfine =>
//     symbol => unique
//     object
//  */
// console.log(typeof name);
// console.log(typeof "Sneha");
// "use strict"; // treat all js code as newer version
// // alert(3+3) we are using nodejs
// console.log(3+3);
// console.log("Sneha");
// //  let name ="Sneha";
// let score = 33;
// console.log(typeof(score));
// let valueInString = String(score);
// console.log(typeof(valueInString));
// console.log(valueInString);
// // when we are converting a string to a number which is a number  then it will easily convert into it ;
// // when a string is not a number and we are converting into number then we get NaN
// // when we are converting null to number then we get 0
// // when we are  converting undefine to number then we get NaN
// //"true"=>1 ; "false"=>0
// /* Boolean conversion
//     1=>true;
//     0=>false;
//     "sneha"=>true;
//     ""=>false;
// */
// let someNumber = 22;
// let StringNumber = String(someNumber);
// console.log(StringNumber);
// console.log(typeof(StringNumber));


// // OPeration

// let value = 3;
// let negValue = - value;
// console.log(negValue);
// console.log(2+2);
// console.log(2*2);
// console.log(2**3);// for power

// let str1 = "sneha ";
// let str2 = "choudhary";
// let str3 = str1+str2;
// console.log(str3);
// console.log("1"+2);
// //comparision
// // at the time of comparsion both dataset should be same
 

// // datatype
// // 
// /*
//     primitive
//     7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//     Refrence Type /Non Primitive: Array, Objects, Functions 
// */

// const Score = 100;   //number
// const ScoreValue = 100.5; //number 
// const isLoogedIn = false; //boolean
// const OutsideTemp = null;
// let userEmail ;  //undefine
// const id = Symbol('123');
// const anotherId = Symbol('123');  
// //symbol datatype is used to give unqiue value  if we pass same value inside symbol it will assign with different value;
// console.log(id === anotherId);
// const BigNumber = 5555555555555555555555555555n; //BigInt

// const heros =["Sneha", "rahul", "Shivangi", "pankti"]; // array
// let myObj ={
//     Name : "Sneha",
//     age :"21",
// }
// const myFunction = function(){ // function
//     console.log("Hello Sneha!");
// }
// //************************************* 
// /*
//     in all primitive data type for storing primitive data types are used --> we get copy 
//     in storing non premitive types  heap is used --> we get reference to original value


// */

/*
    string

 */
const NaMe = "SNeha";
const repoCount = 50;
console.log(`Hello my name is $(NaMe) and my repo Count is $(repoCount)`);
const GameName = new String('SNeha-choudhary-sneh');
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf('t'));
console.log(GameName.substring(0,4)); // in substring if we give starting value as negative then it will start from 0th index
const anotherString = GameName.slice(-3,4); // in slice if we give starting value as negative then it will start from back
console.log(anotherString);
const newString = "   Sneha     ";
console.log(newString.trim());
const url = "https://sneha.com/%20@google.com";
url.replace('%20','-');
console.log(url.includes('sneha'));
console.log(GameName.split('-'));

