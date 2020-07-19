const circle = document.getElementById("circle");
const div = document.querySelector(".container");
const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector('#btn');

let score = 1;
let timeLeft = 10;

circle.addEventListener("click", function (e) {
  document.querySelector(".score").innerHTML = score.toString();
  moveCirc();
  invisible();
  score++;
  stopGame();
});
// start btn
startBtn.addEventListener('click', countDown);
//count down
function countDown() {
  setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timeLeft = 0);
    }

    timerDisplay.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

// invisible function
function invisible() {
  circle.classList.add("invisible");
}

function visible() {
  circle.classList.remove("invisible");
}

start = setInterval(visible, 300);

// stop game after first click in 10 seconds
function stopGame() {
  setTimeout(function () {
    clearInterval(start);
  }, 10000);
}
// posittion and timing of ball
function prep() {
  windHeight = div.offsetHeight;
  windWidth = div.offsetWidth;

  circHeight = circle.clientHeight;
  circWidth = circle.clientWidth;

  availSpaceV = windHeight - circHeight;
  availSpaceH = windWidth - circWidth;

  let changeInterval = 3000;

  setInterval(moveCirc, changeInterval);
}
// changing possition of the ball
function moveCirc() {
  windHeight = div.offsetHeight;
  windWidth = div.offsetWidth;

  circHeight = circle.clientHeight;
  circWidth = circle.clientWidth;

  availSpaceV = windHeight - circHeight;
  availSpaceH = windWidth - circWidth;

  let randNumV = Math.round(Math.random() * availSpaceV);
  let randNumH = Math.round(Math.random() * availSpaceH);

  circle.style.top = randNumV + "px";
  circle.style.left = randNumH + "px";
}

// add stopwhach for timer
