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
    answer: "faran",
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
    question: "Which casino has the David Copperfiled show",
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
  // shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  //
  questionPage_section.classList.remove("hide");
  setInterval(updateTimer, 1000);
  shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  console.log(shuffledQuestions);
  setNextQuestion();
});

function setNextQuestion() {
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

  function selectAnswer() {}
  function resetState() {
    nextButton.classList.add("hide");
  }

  // questionName_h2.innerHTML = questionsArray[0].question;
  // questionsArray[0].question.choices.forEach((choices) => {
  //   var button = document.createElement("button");
  //   button.innerTest = choices.text;
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
