const nextButton = document.querySelector('.next-button button');
const cardElement = document.querySelector('.card');
console.log(nextButton);
nextButton.addEventListener('click', function() {
    console.log("The Next button was clicked");
    currentQuestionIndex += 1;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
cardElement.innerHTML = `<h2>Quiz Complete!</h2><p>You scored ${score} out of ${quizData.length}!</p>`;
    }
});
let triviaAnswers = document.querySelectorAll('.button-grid button')
console.log(triviaAnswers);
triviaAnswers.forEach(function(button, index) {
    button.addEventListener('click', function() {
        checkAnswer(index, button);
    });
});
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.querySelector('.card h2')
console.log(questionElement);
let quizData = [
    {
        question: "What is the capital of France?",
        options: ["Rome", "London", "Paris", "Berlin"],
        correctAnswer: 2
    },
    {
        question: "Who holds the record for most runs in a single cricket World Cup?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Martin Guptill", "Ricky Ponting"],
        correctAnswer: 1
    },
    {
        question: "Who holds the record for most World Cup centuries?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Rohit Sharma", "Quinton de Kock"],
        correctAnswer: 2
    },
    {
        question: "What is the world's most populated country?",
        options: ["India", "China", "USA","Canada"],
        correctAnswer: 0
    },
    {
        question: "What is the world's largest ocean?",
        options: ["Atlantic", "Indian", "Southern", "Pacific"],
        correctAnswer: 3
    },
];
function loadQuestion() {
    let currentData = quizData[currentQuestionIndex];
    questionElement.textContent = currentData.question;
    triviaAnswers.forEach(function(button, index) {
        button.textContent = currentData.options[index];
        button.style.backgroundColor = "";
    });
    }  
    loadQuestion();
console.log(quizData[currentQuestionIndex].correctAnswer);
function checkAnswer(index, button) {
    if (index === quizData[currentQuestionIndex].correctAnswer) {
        console.log("Correct answer");
        button.style.backgroundColor = "green";
        score += 1
    } else {
        console.log("Wrong answer");
        button.style.backgroundColor = "red";
    }
}