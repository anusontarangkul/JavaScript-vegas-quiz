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
});
