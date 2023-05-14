var background1
var obstacle, obstacleGroup
var player
var coins, coinGroup
var restart
var gameOver
var gameState

function preload() {
background1 = loadImage('LabBg.jpeg');



}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  bgSprite = createSprite(380, 260, width, height)
  bgSprite.addImage('LabBg.jpeg', background1);
  bgSprite.scale = 2.1
  bgSprite.velocityX = -4
  
  
  player-createSprite(50, height - 100, 50, 50);
  
  



}

function draw(){
background(background1);

if (bgSprite.x < -1){
  bgSprite.x = bgSprite.width/5;
}

addObstacles();
coin();

if(keyDown("SPACE")){
player.velocityY= -4;

}

drawSprites();
}

function addObstacles(){
  if(frameCount%80===0){
obstacle1=createSprite(width - 50, height - 100, 45, 45);
obstacle1.velocityX = -4 


}
}

function coin(){
  if(frameCount%250===0){
    coin=createSprite(width - 50 ,height - 120, 35,35 )
    coin.velocityX = -4
  }
}






















