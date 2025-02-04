"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catsImg = document.querySelector(".cats-img");  // This is the correct reference

const MAX_IMAGES = 9;

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
  changeImage("yes"); // Call changeImage with "yes" to update the image
}

function changeImage(imageIndex) {
  // Update the image based on index or "yes"
  if (imageIndex === "yes") {
    catsImg.src = "path_to_yes_image.jpg"; // Update with actual image for yes response
  } else {
    catsImg.src = `path_to_cats_image_${imageIndex}.jpg`; // Update with actual images for no clicks
  }
}

function updateNoButtonText() {
  // Dynamically update the text of the No button based on how many times it's clicked
  if (noCount < MAX_IMAGES) {
