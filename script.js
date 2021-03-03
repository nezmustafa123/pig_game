'use strict';
//select dom elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//don't need to enter hash
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
//will convert numbers to strings

//add hidden class to dice class initially
diceEl.classList.add('hidden');

//rolling functionality
//user rolls dice 
//dice score on screen
//if not one add to current
//if click hold add to total

let currentScore = 0;


btnRoll.addEventListener('click', function(){
    //1. generate new random dice roll 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display dice
    diceEl.classList.remove('hidden');
    //dice image source use source property
    //set to string containing dice number
    diceEl.src = `dice-${dice}.png`
    //3. check for rolled 1: if true, switch to next player
    if(dice !== 1){
        //add dice to current score
        currentScore += dice;
        //add score to element text content
        current0El.textContent = currentScore; //change later
        
        
    } else {
        //switch to next player
        //
    }
});

