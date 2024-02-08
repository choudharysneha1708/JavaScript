// const score = 400;
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// //+++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-1));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.2));
// console.log(Math.min(4,2,4,6,1));
// console.log(Math.random());  // this random function gives value between 0 and 1
// const min =10;
// const max = 20;

// console.log(Math.floor(Math.random()*(max-min+1)+min));  // in this value will be between min and max


//+++++++++++++++++++DATE & TIME+++++++++++++++++++++++++++++++++++

// let myDate = new Date(); // date is object type
// console.log(myDate);
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 31);
// console.log(myCreatedDate.toLocaleDateString());
// let newDate = new Date(2024, 0, 5,3,20);
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
let date = new Date("2024-02-05"); //yyyy-mm-dd
let date2 = new Date("2024-02-06"); 
let timeStamp = Date.now(); // calcualte mili second of todays time from 1 - jan - 19.. somethings
console.log(timeStamp);
console.log(date2.getTime());
// to convert mili second value into second;
console.log(Math.round(timeStamp / 1000));
let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getDay());
NewDate.toLocaleString('deafault',{
    weekday: "long",
    // timeZone: ''
})
