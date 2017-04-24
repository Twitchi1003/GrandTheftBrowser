var bullets = [];
var cars = [];
var walking = true;
var driving = false;
var playerCar = null;
var canvWidth = 600;//window.innerWidth;
var canvHeight = 400;//window.innerHeight;



function preload() {
  bgImg = loadImage("twitchi1003.github.io/GrandTheftBrowser//assets/Road.png");     //need better picture
}


function setup() {


  createCanvas(canvWidth,canvHeight);

  playerPos = createVector(0,0);
  playerSpeed = createVector(0,0);

  cars[0] = new Car(playerPos.x + 50, playerPos.y);
// for (var i = 0; i < 4; i++) {
//   cars[i] = new Car(playerPos.x + random(-100,100), playerPos.y + random(-100,100));
//   console.log(cars[i].pos);
//  }

}

function draw() {

  translate(canvWidth/2 , canvHeight/2);
  //center camera on center

  image(bgImg,-canvWidth-playerPos.x,-canvHeight-playerPos.y, bgImg.width*6, bgImg.height*6);
  //draw background map


  updatePlayerPos();

  translate(-playerPos.x,-playerPos.y);


  if (walking){
    drawplayer();
  }

  updateBullets();

  drawcars();

  // console.log(frameRate());
  //make zombie object, health/damage/poss, then spawning function
}
