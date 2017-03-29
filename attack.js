
function createAttack () {

  var tempMousePos = createVector(mouseX - width/2,mouseY - height/2);
  //halves to center on character


  var bullet = {                          //my first manually constructed object, so proud :P
   val : tempMousePos.setMag(10),
   Pos : createVector(playerPos.x,playerPos.y),
   lifeSpan : 100
  }

  bullets.push(bullet);

}

 function updateBullets() {

   for (var i = bullets.length; i--;) {
     bullets[i].Pos.add(bullets[i].val);                    //move possision
     fill(255,255,0);                                       //Drawing
     ellipse(bullets[i].Pos.x,bullets[i].Pos.y,2,2);

     ageBullet();                                           //done after draw to avoid using dead object



   }

function ageBullet()  {
      bullets[i].lifeSpan -= 1;            //age one

      if (bullets[i].lifeSpan <= 1) {     //Detect old age
                bullets.splice(i,1);      //Remove from array
      }
   }

}
