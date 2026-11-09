const openingScreen = document.getElementById("openingScreen");
const letterScreen = document.getElementById("letterScreen");
const successScreen = document.getElementById("successScreen");

const envelope = document.getElementById("openEnvelope");
const openButton = document.getElementById("openButton");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const replayButton = document.getElementById("replayButton");

const question = document.getElementById("question");
const backgroundHearts = document.getElementById("backgroundHearts");

let noCount = 0;
let yesSize = 1;

const noMessages = [
    "Are you sure?",
    "Really?",
    "Think again!",
    "Please?",
    "Pretty please?",
    "Don't say no!",
    "One more chance!"
];


// OPEN ENVELOPE

function openLetter() {

    envelope.classList.add("open");

    setTimeout(() => {

        openingScreen.hidden = true;
        letterScreen.hidden = false;

    }, 900);

}

openButton.addEventListener("click", openLetter);

envelope.addEventListener("click", openLetter);


// NO BUTTON

noButton.addEventListener("click", function() {

    noCount++;

    let messageIndex = Math.min(
        noCount - 1,
        noMessages.length - 1
    );

    noButton.textContent = noMessages[messageIndex];

    yesSize += 0.2;

    yesButton.style.transform = `scale(${yesSize})`;

});


// YES BUTTON

yesButton.addEventListener("click", function() {

    letterScreen.hidden = true;

    successScreen.hidden = false;

    createCelebration();

});


// FLOATING HEARTS

function createCelebration() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("floating-heart");

            heart.textContent = "♥";

            heart.style.left = Math.random() * 100 + "%";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            backgroundHearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);

        }, i * 100);

    }

}


// BACKGROUND HEARTS

function backgroundAnimation() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (10 + Math.random() * 15) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    backgroundHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(backgroundAnimation, 700);


// REPLAY BUTTON

replayButton.addEventListener("click", function() {

    successScreen.hidden = true;

    openingScreen.hidden = false;

    envelope.classList.remove("open");

    noCount = 0;
    yesSize = 1;

    noButton.textContent = "NO";

    yesButton.textContent = "YES";

    yesButton.style.transform = "scale(1)";

});