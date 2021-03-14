var tomImg, jerryImg, tom, jerry, bkgImg,bkg;

function preload() {
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(500,400);
    jerry = createSprite(200,200);

}

function draw() {
    background(255);
    drawSprites();

    //Write condition here to evalute if tom and jerry collide

    if(isTouching(tom,jerry)){
        jerry.shapeColor = 'red';
    }
}

function isTouching(object1, object2) {
    if (object1.x - object2.x < object1.width / 2 + object2.width / 2
      && object2.x - object1.x < object1.width / 2 + object2.width / 2
      && object1.y - object2.y < object1.height / 2 + object2.height / 2
      && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
      return true;
    }
    else {
      return false;
    }
  }

function keyPressed(){

  if(keyDown(LEFT_ARROW)){
      tom.x = tom.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    tom.x = tom.x+10
}
if(keyDown(UP_ARROW)){
    tom.y = tom.y-10
}
if(keyDown(DOWN_ARROW)){
    tom.y = tom.y+10
}

}
