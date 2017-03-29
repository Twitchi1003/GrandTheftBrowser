function keyPressed() {
  if (keyCode === 65) {
    playerSpeed.x =- 1;
  } else if (keyCode === 68) {
    playerSpeed.x =+ 1;
  }

  if (keyCode === 87) {
    playerSpeed.y =- 1;
  } else if (keyCode === 83) {
    playerSpeed.y =+ 1;
  }
}

function keyReleased() {
  if (keyCode === 65) {
    playerSpeed.x = 0;
  } else if (keyCode === 68) {
    playerSpeed.x = 0;
  }

  if (keyCode === 87) {
    playerSpeed.y = 0;
  } else if (keyCode === 83) {
    playerSpeed.y = 0;
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    createAttack();
  }

}
