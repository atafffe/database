var database;
var gameState = 0;
var playerCount;

var form, player, game;

function setup(){
  database = firebase.database();

  game = new Game()
  game.getState()
  game.start()
  
console.log(database);
  createCanvas(400,400);

}

function draw(){
  background("white");
  

    drawSprites();
  
}

