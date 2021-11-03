<<<<<<< HEAD
"use strict";

let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
let playerTurn = 0;

//Starting conditions.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
diceEl.hidden = true;
current0El.textContent = 0;
current1El.textContent = 0;

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.hidden = true;
  document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
});

btnRoll.addEventListener("click", function () {
    if(!((document.querySelector('.player--0').classList.contains('player--winner')) || (document.querySelector('.player--1').classList.contains('player--winner')))){
  const diceRoll = Math.trunc(Math.random() * 6 + 1);
  diceEl.hidden = false;
  diceEl.src = `dice-${diceRoll}.png`;
  if (diceRoll != 1) {
    if (playerTurn == 0) {
      current0El.textContent = Number(current0El.textContent) + diceRoll;
    }else{
        current1El.textContent = Number(current1El.textContent) + diceRoll;;
    }
  }else{
      playerTurn = (playerTurn - 1) * -1;
        document.querySelector(`.player--${((playerTurn - 1) * -1)}`).classList.remove('player--active');
        document.querySelector(`.player--${playerTurn}`).classList.add('player--active');
        document.querySelector(`#current--${((playerTurn - 1) * -1)}`).textContent = 0;
      }
    }
  });

  btnHold.addEventListener("click", function () {
      if(playerTurn == 0){
      if(score0El.textContent < 100){
            score0El.textContent = Number(score0El.textContent) + Number(current0El.textContent);
            if(score0El.textContent > 99){
                document.querySelector('.player--0').classList.add('player--winner');
                document.querySelector(`#current--${playerTurn}`).textContent = 0;
            }else{
                playerTurn = (playerTurn - 1) * -1;
                document.querySelector(`.player--${((playerTurn - 1) * -1)}`).classList.remove('player--active');
                document.querySelector(`.player--${playerTurn}`).classList.add('player--active');
                document.querySelector(`#current--${((playerTurn - 1) * -1)}`).textContent = 0;
            }
        }
      }else{
        if(score1El.textContent < 100){
            score1El.textContent = Number(score1El.textContent) + Number(current1El.textContent);
            if(score1El.textContent > 99){
                document.querySelector('.player--1').classList.add('player--winner');
                document.querySelector(`#current--${playerTurn}`).textContent = 0;
            }else{
                playerTurn = (playerTurn - 1) * -1;
                document.querySelector(`.player--${((playerTurn - 1) * -1)}`).classList.remove('player--active');
                document.querySelector(`.player--${playerTurn}`).classList.add('player--active');
                document.querySelector(`#current--${((playerTurn - 1) * -1)}`).textContent = 0;
            }
        }
    }
});
=======
'use strict';

document.querySelector('.message').textContent = 'No number!'
>>>>>>> main
