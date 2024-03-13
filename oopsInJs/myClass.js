//ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changerUsername(){
    return `${this.username.toUpperCase()}`;
  }
}
const chai = new User("Sneha", "132@noogler.googler.com","456");
console.log(chai.encryptPassword());

//behind the scene if we not used class then we can do same thing by function
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changerUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User ("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changerUsername());