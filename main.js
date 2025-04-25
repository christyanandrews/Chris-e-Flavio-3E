let randomNumber =
Math.floor(Math.random()*10)+1;
let attemps = 0;

function checkGuess (){
    const userGuess = parseInt(document.getElementById('guess') .value);
    attempts++;

    if(userGuess === randomNumber)
    {document.getElementById('message').innerText ='Parabéns, você'}
}
