var bullets = [];
var cars = [];
var walking = true;
var driving = false;
var playerCar = null;



function preload() {
  bgImg = loadImage("https://twitchi1003.github.io/GrandTheftBrowser/Assets/Road.png");     //need better picture
}


function setup() {

  var width = 1280;//window.innerWidth;
  var height = 720;//window.innerHeight;

  createCanvas(width,height);

  playerPos = createVector(0,0);
  playerSpeed = createVector(0,0);

  cars[0] = new Car(playerPos.x + 50, playerPos.y);


}

function draw() {

  translate(width/2 ,height/2);
  //center camera on center

  image(bgImg,-width-playerPos.x,-height-playerPos.y, bgImg.width*8, bgImg.height*8);
  //draw background map

  translate(-playerPos.x,-playerPos.y);

  updatePlayerPos();

  if (walking){
    drawplayer();
  }

  updateBullets();

  drawcars();




  // console.log(frameRate());
  //make zombie object, health/damage/poss, then spawning function
}
