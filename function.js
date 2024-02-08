function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
// function addTwoNumber (number1, number2 ){ // parameter
//     console.log(number1 + number2); 
// }
function addTwoNumber(number1, number2) {
  // parameter
  return (number1 + number2);
}

const result = addTwoNumber(1,3); // arguments
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter valid userName");
        return ;
    }
    return  `${username} just logged in`;
}
let message = loginUserMessage("sneha");
console.log(message);
function calculateCartPrice(...num1){  //... -> this is called rest operator , or spread operator depending on it's use 
    return num1;
}
// function calculateCartPrice(val1, val2,...num1) {
//   //... -> this is called rest operator , or spread operator depending on it's use
//   return num1;
// }
console.log(calculateCartPrice(200,300,400,5000));
const user = {
    username : "Sneha", 
    price: 199
}
function handleObject(anyObject){
    return `userName is ${anyObject.username} and price is ${anyObject.price}`;
}
// let detail = handleObject(user);
handleObject({
    username : "SNeha",
    price :100000
})
const myNewArray =[200,400,600];
function return2ndValue (getArray){
    return getArray[1];
}
// console.log( return2ndValue(myNewArray));
console.log(return2ndValue([200,400,500,600]));