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
    "Miss ganda, sige na"
];

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();

        if (noCount === messages.length) { // Check if last message is displayed
            noButton.textContent = "Yes, please!"; // Change no button to yes
            noButton.removeEventListener("click", arguments.callee); // Remove current listener
            noButton.addEventListener("click", handleYesClick); // Add yes click listener
        }

        if (noCount > messages.length && noCount <= MAX_IMAGES){
            if (noCount === MAX_IMAGES) {
                play = false;
                titleElement.innerHTML = "Okay fine! :("; // Or whatever message you want
                buttonsContainer.classList.add("hidden");
            }
        }

    }
});

function handleYesClick() {
    titleElement.innerHTML = "Yayyy!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    if (noCount < messages.length) {
        noButton.innerHTML = messages[noCount % messages.length]; // Cycle through messages
    }
}
