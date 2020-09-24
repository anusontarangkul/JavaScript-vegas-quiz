// Global variables
var startButtonElement = document.getElementById("start");
var startPageElement = document.getElementById("start-page");
var questionPageElement = document.getElementById("question-page");
var questionNameElement = document.getElementById("question-name");
var choicesElement = document.getElementById("answer-buttons");
var choices = Array.from(document.getElementsByClassName(""));
var nextButtonElement = document.getElementById("next-btn");
var finalScoreElement = document.getElementById("final-score");
var scoreSubmitElement = document.getElementById("score-submit");
var scoreInputElement = document.getElementById("score-input");
var displayScoreElement = document.getElementById("display-score");

var shuffledQuestions;
var currentQuestionIndex;
var playerScore = 0;

//Start quiz
startButtonElement.addEventListener("click", function () {
  startPageElement.classList.add("hide");
  questionPageElement.classList.remove("hide");
  setInterval(updateTimer, 1000);
  shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
});

nextButtonElement.addEventListener("click", function () {
  currentQuestionIndex++;
  setNextQuestion();
});

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionNameElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    choicesElement.appendChild(button);
  });
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  if (correct) {
    playerScore++;
  } else {
    startingTime -= 5;
  }
  Array.from(choicesElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButtonElement.classList.remove("hide");
  } else {
    endQuiz();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  nextButtonElement.classList.add("hide");
}

var questionArray = [
  {
    question: "What is the oldest hotel in Las Vegas?",
    answers: [
      { text: "Golden Gate Hotel", correct: true },
      { text: "Golden Nugget", correct: false },
      { text: "Frontier", correct: false },
      { text: "Flamingo", correct: false },
    ],
  },
  {
    question: "How much does the bronze lion at the MGM Grand Hotel weight?",
    answers: [
      { text: "35 tons", correct: false },
      { text: "40 tons", correct: false },
      { text: "45 tons", correct: false },
      { text: "50 tons", correct: true },
    ],
  },
  {
    question: "In what year was the city of Las Vegas oficially founded?",
    answers: [
      { text: "1897", correct: false },
      { text: "1901", correct: false },
      { text: "1905", correct: true },
      { text: "1911", correct: false },
    ],
  },
  {
    question: "How long is the Las Vegas Strip?",
    answers: [
      { text: "4 miles", correct: true },
      { text: "6 miles", correct: false },
      { text: "8 miles", correct: false },
      { text: "10 miles", correct: false },
    ],
  },
  {
    question: "Which casino has an erupting volcano?",
    answers: [
      { text: "MGM Grand", correct: false },
      { text: "Wynn", correct: false },
      { text: "Mirage", correct: true },
      { text: "Aria", correct: false },
    ],
  },
  {
    question: "Which casino has the David Copperfiled show?",
    answers: [
      { text: "MGM Grand", correct: true },
      { text: "Aria", correct: false },
      { text: "Palazzo", correct: false },
      { text: "Caesars Palace", correct: false },
    ],
  },
  {
    question: "What does Las Vegas mean?",
    answers: [
      { text: "Desert Oasis", correct: false },
      { text: "Place of Entertainment", correct: false },
      { text: "Life in Sand", correct: false },
      { text: "The Meadows", correct: true },
    ],
  },
];

// Timer
var startingTime = 90;
var timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = startingTime;
  startingTime--;
  if (startingTime <= 0) {
    endQuiz();
  }
}

function endQuiz() {
  startingTime = 0;
  questionPageElement.classList.add("hide");
  finalScoreElement.classList.remove("hide");
  displayScoreElement.textContent = playerScore;
}

scoreSubmitElement.addEventListener("click", function () {
  var initials = scoreInputElement.value;
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  var newScore = {
    score: playerScore,
    initials: initials,
  };
  highScores.push(newScore);
  window.localStorage.setItem("highScores", JSON.stringify(highScores));
  location.reload();
});
