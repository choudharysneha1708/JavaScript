//singleton -> when we declear object from consturctor then it's called singleton
// object.create
//object literals
const mySym = Symbol("key1"); // to declear Symbol 
const JsUser ={
    name : "Sneha",
    age : 18,
    [mySym]: "myKey1", // wen we have to use symbol as a key
    location: "jaipur",
    email: "1312518@noogler.googler.com",
    lastLoginDays : ["Monday", "Saturday"]
}
// if u want to access object
console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser[mySym]); // to access that value whoes key is symbol
JsUser.name = "Sneha CHoudhary";
// Object.freeze(JsUser); // by using freeze function we are making this object as final , that if we try to change the value of any paramenter of object changes will not be upadated
JsUser.age = 21; // if we try to update it won't give error but internally it won't updated
console.log(JsUser.age);
JsUser.gretting = function(){
    console.log("hello Sneha!");
}
JsUser.grettingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(JsUser.grettingTwo());

const tinderUser = new Object();  // singleton object
const tinderUseR ={}; // non singleton object
console.log(tinderUseR);
tinderUseR.id = "123";
tinderUseR.name = "Sneha";
tinderUseR.isLoggedIn = false;
const regularUser ={
    email : "iamsneha88@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sneha",
            lastName: "Choudhary"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4: "c"};
// const obj3 = Object.assign({}, obj1,obj2);
const obj3 = {...obj1, ...obj2};
console.log(obj3);
users = [
  {
    id: 1,
    Name: "sneha",
    email: "a@gmail.com",
  },
  {
    id: 2,
    Name: "Shivangi",
    email: "b@gmail.com",
  },
  {
    id: 3,
    Name: "pankti",
    email: "c@gmail.com",
  },
];
users[1].email;
console.log(tinderUseR);
console.log(Object.keys(tinderUseR));
console.log(Object.values(tinderUseR));// this will return all values in array form
console.log(Object.entries(tinderUseR));// it will return all key value pair in array form
console.log(tinderUseR.hasOwnProperty('id'));// has own Property will check this key is present in tinderUseR or not
// destructuring
const course = {
    courseName :"js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor} = course;
console.log(courseInstructor);
// or
const {courseInstructor : instructor} = course;
console.log( instructor);
// above are two method of distructor of js

