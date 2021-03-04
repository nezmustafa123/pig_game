'use strict';
//select dom elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0,0];
//start with zerp on both(big scores)
let currentScore = 0;
let activePlayer = 0;
//player 1 is 0 player 2 is 1 because of array 0 indexed

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
        //select score dynamically based off active player
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//        current0El.textContent = currentScore; //change later
        
        
    } else {
        //switch to next player iff dice is a one
        //keep track of which player is active player when dice was rolled
        //reset current score text content to 0 before switching active player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        //current score not bound to a player
        currentScore = 0;
        //if active player 0 switch to 1 if 1 switch to 0
        activePlayer = activePlayer === 0 ? 1 : 0;
       //toggle active player class
        //if there will remove if not there will add
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    }
});

