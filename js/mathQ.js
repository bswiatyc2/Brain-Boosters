/*math quiz*/
"use strict";

// ELEMENTS
let startButton = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let quizDiv = document.getElementById("quiz");
let submitButton = document.getElementById("submitQuiz");

let q1 = document.getElementById("question1");
let q2 = document.getElementById("question2");
let q3 = document.getElementById("question3");
let q4 = document.getElementById("question4");
let q5 = document.getElementById("question5");

let timer;
let timeLeft = 60;

// Hide quiz until Start is clicked
quizDiv.style.display = "none";

// Correct answers
const answers = {
    question1: 10,
    question2: 4,
    question3: -6,
    question4: 5,
    question5: -7
};

// START QUIZ
startButton.addEventListener("click", function () {
    startButton.disabled = true;
    quizDiv.style.display = "block";
    resetQuiz();
    startTimer();
});

// TIMER FUNCTION
function startTimer() {
    quizClock.value = timeLeft + " seconds";

    timer = setInterval(() => {
        timeLeft--;
        quizClock.value = timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timer);
            quizClock.value = "Time's up!";
            finishQuiz();
        }
    }, 1000);
}

// SUBMIT QUIZ EARLY
submitButton.addEventListener("click", function () {
    clearInterval(timer);
    finishQuiz();
});

// FINISH QUIZ (grading + lock inputs)
function finishQuiz() {
    gradeQuestion(q1, answers.question1);
    gradeQuestion(q2, answers.question2);
    gradeQuestion(q3, answers.question3);
    gradeQuestion(q4, answers.question4);
    gradeQuestion(q5, answers.question5);

    disableInputs();

    alert("Quiz submitted.");
    addRetryButton();
}

// GRADE A SINGLE QUESTION
function gradeQuestion(input, correctAnswer) {
    if (Number(input.value) === correctAnswer) {
        input.style.backgroundColor = "lightgreen";
    } else {
        input.style.backgroundColor = "salmon";
    }
}

// DISABLE ALL INPUTS AFTER SUBMISSION
function disableInputs() {
    q1.disabled = true;
    q2.disabled = true;
    q3.disabled = true;
    q4.disabled = true;
    q5.disabled = true;
    submitButton.disabled = true;
}

// RESET QUIZ FOR RETAKE
function resetQuiz() {
    timeLeft = 60;
    quizClock.value = "";

    let inputs = [q1, q2, q3, q4, q5];
    inputs.forEach(i => {
        i.value = "";
        i.disabled = false;
        i.style.backgroundColor = "white";
    });

    submitButton.disabled = false;
}

// ADD TRY AGAIN BUTTON
function addRetryButton() {
    if (!document.getElementById("retryBtn")) {
        let retry = document.createElement("button");
        retry.id = "retryBtn";
        retry.textContent = "Try Again";
        retry.style.marginTop = "20px";

        retry.addEventListener("click", function () {
            resetQuiz();
            startButton.disabled = false;
            quizDiv.style.display = "none";
            retry.remove();
        });

        quizDiv.appendChild(retry);
    }
}