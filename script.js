"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9;
let play = true;
let noCount = 0;

const messages = [
  "Really?",
  "Pookie Please",
  "I can't take this. 🙁",
  "You're breaking my heart",
  "Can't you change your mind?",
  "How can we be sure if we don't try?",
  "ako nalang sana",
  "It hurts",
  "Aym gonna cry na...",
];

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.innerHTML = "❤️ Yay! I knew you would say yes!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  // Create and show a response message
  const responseMessage = document.createElement("p");
  responseMessage.textContent = "❤️ Yay! I knew you would say yes! ❤️";
  responseMessage.style.color = "red";
  responseMessage.style.fontSize = "20px";
  responseMessage.style.textAlign = "center";

  document.body.appendChild(responseMessage);
}

function handleNoClick() {
  if (play) {
    noCount++;

    // Change the question text
    if (noCount < messages.length) {
      titleElement.innerHTML = messages[noCount];
    }

     function changeImage(image) {
    catsImg.src = `img/cats-${image}.jpg`;
    }

    // At the last "No" click, turn both into "Yes"
    if (noCount >= MAX_IMAGES) {
      play = false;
      noButton.innerHTML = "Yes";
      noButton.classList.add("btn--yes");
      noButton.removeEventListener("click", handleNoClick);
      noButton.addEventListener("click", handleYesClick);
     }
     }
      }
     function resizeYesButton() {
     const computedStyle = window.getComputedStyle(yesButton);
     const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
     const newFontSize = fontSize * 1.10;

  yesButton.style.fontSize = `${newFontSize}px`;
}
  // Decrease No button size
  const noFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = `${Math.max(noFontSize * 0.7, 10)}px`; // Prevent No button from disappearing completely
}
