

function Car (posX,posY) {
  this.length = 40
  this.width = 25
  this.facing = 0; //need better way to orientate to road
  this.pos = createVector(posX-this.width,posY-this.height);


  this.display = function (){
    push();
    rectMode(CENTER);
    rotate(radians(this.facing));
    fill(255,0,0);
    rect(this.pos.x, this.pos.y, this.width, this.length);
    pop();
  } //something majorly wrong here, rotates around point outside car
}


function drawcars() {
  if (driving) {
    if (keyIsDown(65)) {
      console.log("pressed a");
      cars[playerCar].facing -= (1);
    }
    if (keyIsDown(68)) {
      console.log("pressed d");
      cars[playerCar].facing += (1);
    }
}

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
  }

}
