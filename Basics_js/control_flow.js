const score = 200;
if(score >100){
    const power = "fly";
    console.log(`User power : ${power}`);
}
const balance = 1000;
if(balance >500)console.log("test");
if(balance < 500){
    console.log(`less than`);
}else if(balance<750){
    console.log(`less than 750`);
}else if(){
    console.log(`less than 900`);
}else{
    console.log( `more than 900`);
}
let userLoggedIn = true;
let debitCard = true;
if(userLoggedIn && debitCard && 2==3){
    console.log(`allow to buy`);
}
let month = 2;
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2: 
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("sat");
        break;
}