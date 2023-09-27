var trex, trex_running, trex_collided;
var ground, ground_img;
var chao;
var cloud;
var cloudImage;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img = loadAnimation("ground2.png");
cloudImage = loadAnimation("cloud.png");

}
function setup(){
createCanvas(600,200);
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale= 0.5;
trex.x=50;
ground = createSprite(200,180,400,20);
ground.addAnimation("ground2.png",ground_img);
chao = createSprite(200,190,400,10);
chao.visible = false;
}
function draw(){
background("white");
if(keyDown("space") && trex.y>=100){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+0.8
ground.velocityX = -2;
trex.collide(chao);
if(ground.x < 0)
{
  ground.x = ground.width/2;
}

console.log(frameCount);

spawnClouds();
drawSprites();
}
function spawnClouds()
{
  if(frameCount % 60 === 0){

    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime = 50;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}
function spawnObstacles()
{
  if(frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
  }
}