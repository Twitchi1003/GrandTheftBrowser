var bullets = [];
var cars = [];
var walking = true;
var driving = false;
var playerCar = null;
var canvWidth = window.innerWidth/2;
var canvHeight = window.innerHeight/2;



function preload() {
  bgImg = loadImage("assets/Road.png");     //need better picture
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

  image(bgImg,-playerPos.x,-playerPos.y, bgImg.width*6, bgImg.height*6);
  //draw background map


  translate(canvWidth/2 , canvHeight/2);
  //center camera on center

  updateBullets(); //attack.js

  updatePlayerPos(); //player.js

  translate(-playerPos.x,-playerPos.y);



  if (walking){
    drawplayer();
  }

  drawcars();

  // console.log(frameRate());
  //make zombie object, health/damage/poss, then spawning function
}
