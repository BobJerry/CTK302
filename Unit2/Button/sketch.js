<<<<<<< HEAD
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
 switch(state) {
  case 0:
 background("red");
 text("what do you\ncall a fake noodle?", width/2, height/2);
 break;

 case 1:
 background("blue");
 text("an impasta!", width/2, height/2);
 break;
 }
 rect(100, 100, 100, 100);
}

function mouseReleased() {

if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200)
state++;
if (state > 1) state = 0;
}
=======
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
 switch(state) {
  case 0:
 background("red");
 text("what do you\ncall a fake noodle?", width/2, height/2);
 break;

 case 1:
 background("blue");
 text("an impasta!", width/2, height/2);
 break;
 }
 rect(100, 100, 100, 100);
}

function mouseReleased() {

if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200)
state++;
if (state > 1) state = 0;
}
>>>>>>> fd0a33306c5c9cfc1ff32bc84550c5f1d772536b
