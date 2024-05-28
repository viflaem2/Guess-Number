//Random Number Generation between 1 and 100 inclusive
let randomNumber=Math.floor(Math.random()*100)+1;
//Connecting the js code with the html
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lORh=document.querySelector(".lORh");
const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector("#guessField");
//Game variables
const maxGuesses=10;
let guessCount=0;
let resetButton;
//Game reset function
function resetGame(){
    guessCount=0;
    const reset=document.querySelectorAll('.result p');
    for (const variable of reset){
        variable.textContent="";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessSubmit.classList.remove("disabledHover");
    guessField.value="";
    guessField.focus();
    randomNumber=Math.floor(Math.random()*100)+1;
}
//Game over function
function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Try Again";
    resetButton.classList.add("tryAgainButton");
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
    guessSubmit.classList.add("disabledHover");
}
//Game logic function
function checkGuess(){
    if(guessCount==0){
        guesses.textContent="Last Guesses: ";
    }
    let userGuess=Number(guessField.value);
    while(userGuess<=0 || userGuess >=101){
        lastResult.textContent = "Wrong Number. Choose a number between 1 and 100";
        guessField.value = ""; 
        guessField.focus(); 
        return; 
    }
    guessCount++;
    guesses.textContent+=userGuess+" ";
    if(userGuess==randomNumber){
        lastResult.textContent = "A winner is you!";
        lORh.textContent="";
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent= "GAME OVER. Try learning what binary search is!";
        lORh.textContent="";
        setGameOver();
    }
    else if(userGuess<randomNumber){
        lastResult.textContent= "Try bigger";
    }
    else if(userGuess>randomNumber){
        lastResult.textContent= "Try smaller";
    }
    guessField.value="";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);
