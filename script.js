"use strict";

let winCount = -1;
let lossCount = -1;
let moreThanFiveWins = false;
let moreThanFifteenLoses = false;
const winsArr = [];
const lossArr = [];

const winContainer = document.querySelectorAll(".Win");
const lossContainer = document.querySelectorAll(".Loss");

winContainer.forEach((element) => {
  winsArr.push(element);
});

lossContainer.forEach((element) => {
  lossArr.push(element);
});

const winButton = document.querySelector(".winButton");

winButton.addEventListener("click", () => {
  winCount++;
  if (winCount === 5) {
    moreThanFiveWins = true;
  }
  if (moreThanFiveWins === false) {
    winsArr[winCount].className += " winAchieved";
  }
});

const resetButton = document.querySelector(".resetBtn");

resetButton.addEventListener("click", reset);

function reset() {
  winCount = -1;
  lossCount = -1;
  winContainer.forEach((element) => {
    element.classList.remove("winAchieved");
  });

  lossContainer.forEach((element) => {
    element.classList.remove("lossGained");
  });

  moreThanFiveWins = false;
  moreThanFifteenLoses = false;
}

const lossBtn = document.querySelector(".lossButton");

lossBtn.addEventListener("click", () => {
  lossCount++;
  if (lossCount === 15) {
    moreThanFifteenLoses = true;
  }
  if (moreThanFifteenLoses === false) {
    lossArr[lossCount].className += " lossGained";
  }
});
