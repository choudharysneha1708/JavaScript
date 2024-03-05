//genrate a random color
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6 ; ++i){
        // let ind = parseInt((Math.random()*100)%16);
        //  let ind = parseInt(Math.random() * 16);
        let ind = Math.floor((Math.random() * 16) );
        console.log(ind);
        color+=hex[ind];
    }
    return color;
}
function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}
let intervalID;
let startChangingColor = function(){
    if(intervalID == null){
        intervalID = setInterval(changeBgColor, 1000);
    }
}
let stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}
console.log(randomColor());
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);