// const userEmail = "1312518@noogler.googler.com";
const userEmail =[];
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
/*
    falsy values
    false, 0,-0, BigInt 0n, "", null, undefined,NaN,
    truthy values
    "0",'false', " ", [],{},function(){},

 */
// if u have to check array is empty or not then check its length keyword
if(userEmail.length===0){
    console.log("Array is empty!");
}
const emptyObj = {};
if(Object.keys(emptyObj).length===0){  // if u have to check object is epty or not then take it's all key itno array and compair it's length is 

    console.log("Object is empty!"); // equal to 0 or not
}

//  NUllish Coalescing operator : null /underfined 
let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ??15;
val1 = null ?? 10?? 15; // output --> 10
console.log(val1);


//Terniary opeator
// condition ? true : false;
const iceTeaPrice=100;
iceTeaPrice >= 80 ? console.log("lessThan 80") : console.log("more than 80");