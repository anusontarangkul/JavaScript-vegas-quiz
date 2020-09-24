var printedScoresElement = document.getElementById("printed-scores");

function printHighScores() {
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  console.log(highScores);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  highScores.forEach(function (score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;
    // display on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}
printHighScores();
