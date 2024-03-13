class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`Username: ${this.userName}`);
    }
    // static createId(){    if u declear any method as static then it's not accesseble
    //     return `1234`;   in object of that class also object of it's child class
    // }
    createId(){
        return `1234`;
    }
}
let Sneha = new User("Sneha")
// console.log(Sneha.createId());
class Teacher extends User{
    constructor(userName , email){
        
        super(userName);
        this.email = email;
    }
}

let srijit = new Teacher("Srijit", "123@googler.com");
srijit.logMe();
console.log(srijit.createId());