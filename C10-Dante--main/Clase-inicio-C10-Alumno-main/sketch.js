
var trex,trex_running;
var edges;
var ground;
var invisibleGround;
var cloud,cloudimage
var cloudsGroup

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundfachero=loadImage ("ground2.png")
  cloudimage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(200,180,400,20)
  ground.addImage("ground", groundfachero)
  ground.x = ground.width /2
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50; 
  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible = false
  cloudsGroup=new Group()
}

function draw(){
  background(150);
  ground.velocityX = -7
  if(ground.x <0){
    ground.x = ground.width /2
  }

  //console.log(trex.y);
  if(keyDown("space") && trex.y >= 150){
    trex.velocityY=-7
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(invisibleGround);
  spawnClouds()
  drawSprites()
}

function spawnClouds(){
if(frameCount %60 ===0){
  cloud = createSprite (600,100,40,10);
  cloud.velocityX = -3 
  cloud.addImage(cloudimage)
  cloud.y = Math.round(random(10,150))
  cloud.scale = 0.4
  cloud.depth = trex.depth;
  trex.depth +=1
  cloudsGroup.add(cloud)
}

}



