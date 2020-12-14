var movingRect , fixedRect ;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  movingRect = createSprite(20,20,70,90);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect = createSprite(200,200,40,100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  console.log(movingRect.x - fixedRect.x && fixedRect.x - movingRect.x);

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject2)){
    
    movingRect.shapeColor = "red" ;
    gameObject2.shapeColor = "red";
    }
  
    else {
      movingRect.shapeColor = "green" ;
      gameObject2.shapeColor = "green";
    }
  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function isTouching(object1,object2){

  if( object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x -  object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true ;
    }
  
    else {
      return false ;
    }
}














