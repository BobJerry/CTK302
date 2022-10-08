let state = 0;
let x = 0;
let v = 0;
let timer = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("grey");
  loadFile("assets/Egg.psd");
  fill("white");
text("You have 10 seconds to decide the fate of the egg", 215, 140);
switch (state) {

  case 0: //normal state
  
    v=10;
    break;

  case 1: //sawblade half way down

   v=5;
  break;

  case 2: //sawblade replaces egg
  
  v=0;
  break;
}

timer++;
if (timer > 7 * 60) {
timer = 0;
state++;
if (state > 2) state=0;
}
fill("blue")

x = x+v;
if (x > width) {
x = 0;
}
}
function mouseReleased() {
state++;
if (state > 2) state = 0;

}