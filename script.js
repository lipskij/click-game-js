const circle = document.getElementById('circle');
const div = document.querySelector('.container');

let score = 0;

circle.addEventListener('click', function(e) {
  document.querySelector('.score').innerHTML = score.toString();
  moveCirc();
  invisible();
  score++;
  stopGame();
});

// invisible function
function invisible() {
  circle.classList.add('invisible');
}

function visible() {
  circle.classList.remove('invisible');
  console.log(visible);
};

start = setInterval(visible, 300);

// stop game after first click in 5 seconds
function stopGame() {
  setTimeout(function() {
    clearTimeout(start)
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

  circle.style.top = randNumV + 'px';
  circle.style.left = randNumH + 'px';
}