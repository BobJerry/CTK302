let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
 switch(state) {
  case 0:
 background("red");
 text("what time is \nthe dentist appointment?", width/2, height/2);
 break;

 case 1:
 background("blue");
 text("tooth hurt-y!", width/2, height/2);
 break;
 }
}

function mouseReleased() {
state++;
if (state >1) state = 0;
}
