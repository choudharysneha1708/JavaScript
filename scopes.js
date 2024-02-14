let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ", a);

}
// console.log(a);
// console.log(b);
console.log(c); // when we are trying to access variable wich is defined using var keyword then is accesable outside it's scope

//nessted scope
function one(){
    const userName ="Sneha";
    function two (){
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();
if(true){
    const userName ="Sneha";
    if(userName ==="Sneha"){
        const website ="Youtube";
        console.log(userName +" "+ website);
    }
}


// ++++++++++++++++++Intersting+++++++++++++++++++++++++
addOne(5);
function addOne(num){      // if we call function before decleartion it won't give error it give correct output
    return num+1;
}
console.log(addOne(5));
// addTwo(5);
const addTwo = function(num){ // expression  ---> if we call expression before declearation it will give error
    return num +2;
}
addTwo(5);