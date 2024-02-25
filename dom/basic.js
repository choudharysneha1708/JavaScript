// document.getElementById('title').getAttribute('id')
// document.getElementById('title').getAttribute('class')
// document.getElementById('title').setAttribute('class','test heading') // it override the class name by the value (here->test)
// const title = document.getElementById('title')
// title.style.backgroundColor = 'green'
// title.style.padding = "15px"
// title.style.borderRadius ="15px"
// title.innerHTML
// title.textContent
// title.innerText
// // difference btw innertext and textcontent 
// /*
//     in text content we get all the text 
//     but in innerText we get only visible text (like some time text are wriitten with didplay none  so that text is not displayed in screen )
//     so those kind text we didn't get access by innerText

//     in case of inner html -> we get html also if html is written inside 
//     that 
//     i.e. if u have to set html also then use innerhtml
//  */

// //more ways to select classes
// document.getElementsByClassName('heading')

// // query Selector
// document.querySelector('h1')// iske andar jo likha h woh page pr first jo hoga woh mil jae ga
// // in qurey selector we can acess  class by . , id by # , i.e. in same way as we do in 
// // css 