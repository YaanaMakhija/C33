var canvas;
var gameState=0;
var playerCount, database;
var form, game, player;

function setup()
{
  database = firebase.database();
  createCanvas(400,400);

  game= new Game();
  game.getState();
  game.start();
}

function draw()
{
  background("white");
}