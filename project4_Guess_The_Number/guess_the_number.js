let randomNumber = Math.round(Math.random() * 100 + 1); // or u can use parseInt
// const randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessFeild");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame =  true;
if(playGame){
    submit.addEventListener('click', function(e){
      e.preventDefault();  
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    })
}
function validateGuess (guess){
    if(isNaN(guess)){
        alert("please add Valid Number!")
    }
    else if(guess>=1 && guess <=100){
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMsg(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            // numGuess++;
             displayGuess(guess);
            checkGuess(guess);
        }
        
    }else{
        alert("please add Valid Number!");
    }
}
function checkGuess(guess){
    if(guess=== randomNumber){
          displayMsg(`You guessed Right. Random number was ${guess}`);
          endGame();
    }else if(guess<randomNumber){
          displayMsg(`Your guess is too less.`);
        //  endGame();
    }else{
          displayMsg(`Your guess is too high.`);
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML+= `$(guess), `;
    numGuess++;
    remaning.innerHTML = `$(11- numGuess)`;
}
function displayMsg(Msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function endGame() {
    userInput.value();

    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    StartOver.appendChild(p);
    playGame= false;
    NewGame();
}
function NewGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML= '';
        remaning.innerHTML = `$(11- numGuess)`;
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playGame = true;
    });
}

