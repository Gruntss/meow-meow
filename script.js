"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");  // This is the correct reference

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

const messages = [
  "Really?",
  "Pookie Please",
  "I can't take this. 🙁",
  "You're breaking my heart",
  "Can't you change your mind?",
  "How can you be sure if we don't try?",
  "ako nalang sana",
  "It hurts",
  "Miss ganda, sige na",
];

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy! I knew you would say yes!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}


function handleNoClick() {
  if (noCount < MAX_IMAGES) {
    noCount++;

    // Change the question text
    titleElement.textContent = messages[Math.min(noCount, messages.length - 1)];

    // Update the cat image
    changeImage(noCount);

    // Resize the buttons
    resizeButtons();
  }

  // At the last "No" click, turn both into "Yes"
  if (noCount === MAX_IMAGES) {
    noButton.textContent = "Yes";
    noButton.classList.add("btn--yes");
    noButton.removeEventListener("click", handleNoClick);
    noButton.addEventListener("click", handleYesClick);
  }
}

function resizeButtons() {
  // Increase Yes button size
  const yesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${yesFontSize * 1.4}px`;

  // Decrease No button size (minimum 12px so it doesn’t disappear)
  const noFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${Math.max(noFontSize * 0.7, 12)}px`;
}
