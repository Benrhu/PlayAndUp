/**
 * In the first four rounds, the user can earn up to 25 pts per card.
 * 
 * From round 5 to 10, you can earn up to 50 pts per card.
 * 
 * Up to 15 round, you can earn up to 100 pts per card.
 */

var highScore;
var yourPoints = Number(yourPoints);

var rndm = Math.floor(Math.random() * 25);

var card = document.querySelectorAll('.flip-card-click')

/* card.addEventListener('click', () => {
  rndm += yourPoints;
  document.getElementById('yourPoints').innerHTML = yourPoints;
}); */

function addPoints() {
  yourPoints = rndm;
  document.getElementById('yourPoints').innerHTML = yourPoints;
  console.log(yourPoints);
  console.log(rndm);
}

function fade(){
  document.querySelectorAll('.flip-card-click').forEach(function (item) {
  item.classList.toggle('fade');
});
}

function reset() {
  document.querySelectorAll('.flip-card-click').forEach(function (item) {
    item.classList.remove('fade');
  });
}


document.querySelectorAll(".flip-card-click").forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("flipped");
    addPoints();
    fade();
    setTimeout(() => {
      reset();
    }, 600);
  });
});