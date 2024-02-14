const user ={
    userName : "Sneha",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.userName = "choudhary";
user.welcomeMessage();
console.log(this);
// function chai (){
//     let userName ="Sneha"
//     console.log(this);
// }
// chai();
const chai = ()=>{
    let userName = "sneha";
    console.log(this);
}
// () => {} // arrow function basic syntax ,we can hold this arrow function inside a variable
// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }
const addTwo = (num1, num2) => num1 + num2;  // implicity arrow function 
// const addTwo = (num1, num2) =>( num1 + num2);  // if u have to return any thing u can use () <- this , but if u have return object u should use this ()

console.log(addTwo(2,3));
