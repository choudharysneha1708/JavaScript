// let myName = "Sneha";
// console.log(myName.length);
// myName.prototype.trueLength

let myHeros = ["Sneha", "shivangi", "pankti"];

let heroPower = {
    Sneha: "hammer",
    shivangi: "sling",
    getSpiderPower: function(){
        console.log(`shivu power is ${this.shivangi}`);
    }
} 
Object.prototype.sneha = function(){
    console.log((`Sneha is present in all Object`));
}
Array.prototype.heySneha = function(){
    console.log(`Hello sneha!`);
}
heroPower.sneha();
myHeros.sneha();
myHeros.heySneha();
// heroPower.heySneha(); ----> i.e. if we inject method in array then we can't access that in object
// to be more specific  upper class can't access method of lower class

//inheritance
const User = {
    Name : "Sneha",
    email: "13113@noogler.googler.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport 
}
Teacher.__proto__ = User

//modersyntax
Object.setPrototypeOf(TeachingSupport, Teacher);
let anotherUserName = "ChaiAurCode      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(${this.name});
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength();