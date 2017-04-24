

function Car (posX,posY) {
  this.length = 40
  this.width = 25
  this.carspeed = 100
  this.health = 100
  this.facing = 0; //need better way to orientate to road
  this.pos = createVector(posX+this.width,posY+this.length);


  this.display = function (){
    push();
    if (this == cars[playerCar]){
          var active = this.pos;
          translate(active.sub(playerPos));
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
      cars[playerCar].facing += (1);
    }
    if (keyIsDown(68)) {
      cars[playerCar].facing -= (1);
    }


    if (keyIsDown(87)) {
     var turn = cars[playerCar].facing % 360; //no good with negative
     x = cars[playerCar].carspeed * sin(radians(turn));
     y = cars[playerCar].carspeed * cos(radians(turn));
     var carMove = createVector(x,y);

    //  cars[playerCar].pos.add(carMove);           //neither of these will move the car :/
     cars[playerCar].pos.add(carMove.x,carMove.y);  //problem, playerPos + cars[PlayerCar] vectors = 0 no idea why this happens

     ellipse(carMove.x,carMove.y, 10 , 10);

    }
}

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
  }

}
