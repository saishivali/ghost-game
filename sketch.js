var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(200,200,20,20)
  ghost.addImage("ghost",ghostImg)
ghost.scale=0.35

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawnclimber()
    spawndoors()
    drawSprites()
   
}
function spawndoors(){
  if(frameCount%100==0){
  doors=createSprite(200,-20,20,20)
  doors.addImage(doorImg)
doors.x=Math.round(random(50,550))
doors.velocityY=5
doors.y=climber.y
climber.x=Math.round(random(50,550))
climber.velocityY=5
  }
}
function spawnclimber(){
 
  climber=createSprite(200,200,20,20)
  climber.addImage(climberImg)
 
  
}
