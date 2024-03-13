console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);
const person = {
    name: "rahul kumar",
    age: 22,
    isAvailable: true,
    personGud : function(){
        console.log(`person is gud!`);
    }
}
console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// to change the property
Object.defineProperty(person, 'name', {
    // writable: false,
    // enumerable: false,  // if enumerable is false then u can't loop on that property
})

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// direct object pr loop nhi laga sakte
for(let [key, value] of Object.entries(person)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}