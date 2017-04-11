

function Car (posX,posY) {
  this.length = 40
  this.width = 25
  this.facing = 0; //need better way to orientate to road
  this.pos = createVector(posX+this.width,posY+this.length);


  this.display = function (){
    push();
    if (this == cars[playerCar]){
          translate(this.pos.sub(playerPos));
        } //moves camera to player car for rotation, no idea if this wors with NPCar
    rectMode(CENTER);
    rotate(radians(this.facing));
    fill(255,0,0);
    rect(this.pos.x, this.pos.y, this.width, this.length);
    pop();
  }
}


function drawcars() {
  if (driving) {
    if (keyIsDown(65)) {
      cars[playerCar].facing -= (1);
    }
    if (keyIsDown(68)) {
      cars[playerCar].facing += (1);
    }
}

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
  }

}
