'use strict';

var board = document.getElementById('board');
var ctx = board.getContext('2d');
var gold = new Image();
gold.src = 'gold.png';

//image needs to load before it can be drawn
gold.onload = function() {
  ctx.drawImage(gold,randomX(), randomY());
};

var timer = setTimeout(function countdown() {
  ctx.clearRect(0, 0, 900,500);
  ctx.drawImage(gold,randomX(), randomY());
  timer = setTimeout(countdown, 3000);
}, 3000);

function randomX() {
  return Math.ceil(Math.random() * (900 - 200));
}

function randomY() {
  return Math.ceil(Math.random() * (500 - 200));
}
