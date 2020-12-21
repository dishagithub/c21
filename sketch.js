var movingRect,fixedRect;
var ob1,ob2;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue"
  movingRect.velocityX=-3
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green"
  fixedRect.velocityX=3
  ob1=createSprite(400,250,50,50);
  ob1.shapeColor="pink"
  ob1.velocityY=3
  ob2=createSprite(400,350,50,50)
  ob2.shapeColor="purple"
  ob2.velocityY=-3
}

function draw() {
  background(255,255,255);  
  bounce(fixedRect,movingRect)
  bounce(ob1,ob2)
  drawSprites();
  
}
