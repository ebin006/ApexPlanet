const quizQuestions = [
    { question: "JavaScript is a programming language.", answer: true },
    { question: "CSS stands for Computer Style Sheets.", answer: false },
    { question: "HTML is used for structuring web pages.", answer: true }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").textContent = quizQuestions[currentQuestion].question;
}

function checkAnswer(answer) {
    let message = document.getElementById("quiz-message");
    if (answer === quizQuestions[currentQuestion].answer) {
        message.textContent = "Correct!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong!";
        message.style.color = "red";
    }
    currentQuestion = (currentQuestion + 1) % quizQuestions.length;
    setTimeout(loadQuestion, 1000);
}

const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let currentImage = 0;

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("carousel-image").src = images[currentImage];
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById("carousel-image").src = images[currentImage];
}

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById("joke").textContent = "Failed to fetch joke.";
        });
}

window.onload = loadQuestion;
