var database;
var form,game,player;
var gameState=0;
var playerCount=0
var bg;
var backgroundf;
var allPlayers;
var goku,vegeta,gokuImg,vegetaImg,glim,vrim;
var playerArr;
function preload(){
  backgroundf=loadImage("images/backgroundfirst.jpg")
  bg=loadImage("images/bg.jpg")
gokuImg=loadImage("images/goku_right.png");
vegetaImg=loadImage("images/vegeta_left.png");
glim=loadImage("images/goku_left.png")
vrim=loadImage("images/vegeta_right.png")
}




function setup() {
  createCanvas(displayWidth,displayHeight);
database=firebase.database();
game=new Game();
game.getState();
game.start();


}

function draw() {
  background(backgroundf);  
  if(playerCount===2){
    gameState=1
    game.update(1)
  }
if(gameState===1){
  clear();
  game.play()
}
}