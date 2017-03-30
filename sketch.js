var bullets = [];


function preload() {
  bgImg = loadImage("https://twitchi1003.github.io/GrandTheftBrowser/Assets/Road.png");     //need better picture
}


function setup() {

  var width = window.innerWidth;
  var height = window.innerHeight;

  createCanvas(width/1.7,height/1.7);

  playerPos = createVector(random(0,bgImg.width),random(0,bgImg.height));
  playerSpeed = createVector(0,0);


}

function draw() {

  translate(-playerPos.x + width/2,-playerPos.y + height/2)
  //this is voodoo that centers camera on playerPos

  image(bgImg,0,0, bgImg.width*8, bgImg.height*8);
  fill(255,0,255,255);
  ellipse(playerPos.x, playerPos.y, 10 , 10);


  updateBullets();
  //still a little beyiond me, need to pass vars across

  playerPos.add(playerSpeed);

  // console.log(frameRate());
  //make zombie object, health/damage/poss, then spawning function
}
