"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9; // Total images (cats-0.jpg to cats-8.jpg)
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
  "Miss ganda, sige na",
];

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.textContent = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes"); // Show the final 'yes' image

  // Show a cute response message
  const responseMessage = document.createElement("p");
  responseMessage.textContent = "❤️ Yay! I knew you would say yes! ❤️";
  responseMessage.style.color = "red";
  responseMessage.style.fontSize = "20px";
  responseMessage.style.textAlign = "center";

  document.body.appendChild(responseMessage);
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

function changeImage(imageIndex) {
  // Log the image path being used
  const imagePath = `img/cats-${imageIndex}.jpg`;
  console.log(`Changing image to: ${imagePath}`);

  // Update the image source
  catsImg.src = imagePath;

  // Handle image load and error events for better debugging
  catsImg.onload = () => {
    console.log(`Image loaded: ${imagePath}`);
  };
  catsImg.onerror = () => {
    console.error(`Failed to load image: ${imagePath}`);
  };
}
