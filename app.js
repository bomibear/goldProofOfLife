var board = document.getElementById('board');
var ctx = board.getContext('2d');
var gold = new Image();
//image needs to load before it can be drawn
gold.onload = function() {
  ctx.drawImage(gold,randomX(), randomY());
};

gold.src = 'gold.png';

function randomX() {
  return Math.ceil(Math.random() * (900 - 200));
}

function randomY() {
  return Math.ceil(Math.random() * (500 - 200));
}
