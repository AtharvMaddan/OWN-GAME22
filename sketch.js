var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacle,obstacleImg,obstacleGroup
var form, player, game;
var track,car1Img,car2Img,ground

var cars, car1,car2
function preload(){
  track = loadImage("image/track.jpg")
  car1Img = loadImage("image/rsz_th_1.jpg")
  car2Img  = loadImage("image/thf.jpg")
  ground = loadImage("image/ground.png")
  obstacleImg = loadImage("image/stone-1.png")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacleGroup = new Group()
}

function draw() {
  background(255,255,255);  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState ===2){
    game.end()
  }
  drawSprites();

}