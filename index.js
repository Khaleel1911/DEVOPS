const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const question = document.getElementById("question");

function moveNoButton() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
    const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

yesButton.addEventListener("click", () => {
    question.textContent = "Haha, you have no choice!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
});


noButton.addEventListener("click", () => {
    question.textContent = "DEVOPS hate you!";
});


noButton.addEventListener("mouseover", moveNoButton);
