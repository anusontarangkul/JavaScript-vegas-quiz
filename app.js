//
/*
Openinng page with title and start button
New div with question and 4 multiple choice questions
Add Nav Bar with high score page and timer
Start timer
Have 5 questions and answers
New question after evaluation
If false, deduct time
Once questions are all complete or time runs out,
display initials and score
push initials and score to local storage




*/

// DOM variables
var startButton = document.getElementById("start");
var startPage_section = document.getElementById("start-page");
var questionPage_section = document.getElementById("question-page");
var questionName_h2 = document.getElementById("question-name");
var choices_btn = document.getElementById("answer-buttons");
var choices = Array.from(document.getElementsByClassName(""));
var nextButton_btn = document.getElementById("next-btn");
var finalScore_section = document.getElementById("final-score");

var shuffledQuestions;
var currentQuestionIndex;
//Set attribute class to (.hide) to hide the div

var questionsArray = [
  {
    question: "What is the oldest hotel in Las Vegas?",
    choices: ["Golden Gate Hotel", "Golden Nugget", "Frontier", "Flamingo"],
    answer: "Golden Gate Hotel",
  },
  {
    question: "How much does the bronze lion at the MGM Grand Hotel weight?",
    choices: ["35 tons", "40 tons", "45 tons", "50 tons"],
    answer: "50 tons",
  },
  {
    question: "In what year was the city of Las Vegas oficially founded?",
    choices: ["1897", "1901", "1905", "1911"],
    answer: "1905",
  },
  {
    question: "How long is the Las Vegas Strip?",
    choices: ["4 miles", "6 miles", "8 miles", "10 miles"],
    answer: "4 miles",
  },
  {
    question: "Which casino has an erupting volcano?",
    choices: ["MGM Grand", "Wynn", "Mirage", "Aria"],
    answer: "Mirage",
  },
  {
    question: "Which casino has the David Copperfiled show?",
    choices: ["MGM Grand", "Aria", "Palazzo", "Caesars Palace"],
    answer: "MGM Grand",
  },
  {
    question: "What does Las Vegas mean?",
    choices: [
      "Desert Oasis",
      "Place of Entertainment",
      "Life in Sand",
      "The Meadows",
    ],
    answer: "The Meadows",
  },
];

//Start quiz
startButton.addEventListener("click", function () {
  startPage_section.classList.add("hide");
  questionPage_section.classList.remove("hide");
  setInterval(updateTimer, 1000);
  shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  console.log(shuffledQuestions);
  setNextQuestion();
});

nextButton_btn.addEventListener("click", function () {
  currentQuestionIndex++;
  setNextQuestion();
});

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionName_h2.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    choices_btn.appendChild(button);
  });
}

function selectAnswer(e) {
  var selectedButton = e.target;
  console.log(selectedButton);
  const correct = selectedButton.dataset.correct;
  Array.from(choices_btn.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton_btn.classList.remove("hide");
  } else {
    questionPage_section.classList.add("hide");
    finalScore_section.classList.remove("hide");
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
  while (choices_btn.firstChild) {
    choices_btn.removeChild(choices_btn.firstChild);
  }
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

var startingMinutes = 5;
var secondsTime = startingMinutes * 60;
var timer_span = document.getElementById("timer");

function updateTimer() {
  var minutes = Math.floor(secondsTime / 60);
  var seconds = secondsTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer_span.innerHTML = `${minutes}:${seconds}`;
  secondsTime--;
}
