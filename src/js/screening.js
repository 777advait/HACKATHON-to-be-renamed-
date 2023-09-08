let score = 0;
let currentQuestionIndex = 0;
const questions = [
    {
        question: "Over the last two weeks, how often have you felt down, depressed, or hopeless?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "Have you had little interest or pleasure in doing things you normally enjoy?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "How often have you felt nervous, anxious, or on edge?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    },
    {
        question: "Have you had trouble falling or staying asleep, or have you been sleeping too much?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ]
    }
];

function startScreening() {
    // const startButton = document.getElementById("startButton");
    // const questionContainer = document.getElementById("questionContainer");
    questionContainer.style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;

        // Generate option buttons
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.className = "option-btn"
            optionButton.innerText = option.text;
            optionButton.addEventListener("click", () => recordResponse(index));
            optionsContainer.appendChild(optionButton);
        });
    } else {
        evaluateScore();
    }
}

function recordResponse(responseIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[responseIndex];
    score += selectedOption.score;

    currentQuestionIndex++;
    nextQuestion();
}

function evaluateScore() {
    const resultContainer = document.getElementById("resultContainer");
    const resultText = document.getElementById("resultText");

    let result = "";
    if (score <= 4) {
        result = "Your risk level is low. There is no immediate cause for concern.";
    } else if (score <= 9) {
        result = "Your risk level is moderate. Consider reaching out to a mental health professional or a trusted person to talk about your feelings.";
    } else {
        result = "Your risk level is high. It's important to seek help from a mental health professional as soon as possible.";
    }

    resultText.innerText = result;
    resultContainer.style.display = "block";
}


startScreening()