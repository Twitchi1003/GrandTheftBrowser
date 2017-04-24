
function updatePlayerPos () {
  if (walking) {
    playerPos.add(playerSpeed);
  }

  if (driving) {
    playerPos = cars[playerCar].pos;
  }
}


function drawplayer () {

  fill(255,0,255,255);
  ellipse(playerPos.x, playerPos.y, 10 , 10);
}

function getInOut() {

    //check for car distances
    for (var i = 0; i < cars.length; i++) {
      var distance = playerPos.dist(cars[i].pos);
      if (distance < 75 && walking) {
        walking = false;
        playerCar = i;
        playerPos = cars[playerCar].pos;
        driving = true;
      }
      else if (driving) { //get out
        driving = false;
        //work out new pos, (car center - half carWidth)
        walking = true;
        console.log('out');
      }
    }



 }
