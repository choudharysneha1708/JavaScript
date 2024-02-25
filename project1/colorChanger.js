const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        // body.style.backgroundColor = e.target;
        const color = window
          .getComputedStyle(e.target, null)
          .getPropertyValue("background-color");
        body.style.backgroundColor = color;
    })
})
// body.addEventListener('click', function(){
//    body.style.backgroundColor= 'yellow';
// })