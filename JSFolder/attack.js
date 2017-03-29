
function createAttack () {
  // console.log("Pressed");
  //need array to track more than one bullet
  var tempMousePos = createVector(mouseX,mouseY);

  var bullet = {
   Speed : tempMousePos.sub(playerPos),
   Pos : createVector(playerPos.x,playerPos.y),
   lifeSpan : 100
  }
  bullets.push(bullet);
}

 function updateBullets() {

   for (var i = bullets.length; i--;) {
     console.log(bullets[i]);
     //bullets[i]
     bullets[i].Pos.add(bullets[i].Speed); //first travel

     bullets[i].lifeSpan -= 1;            //check for time

      // if (lifeSpan < 1) {
      //           bullets.splice(i,1);
      // }
      //this does not kill teh bullet.. find out why

     fill(255,255,0);
     ellipse(bullets[i].Pos.x,bullets[i].Pos.y,30,30);
     //draw not working.. why?!?!
   }

}
