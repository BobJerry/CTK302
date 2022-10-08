let state = 0;
let x = 0;
let v = 0;
let timer = 0;
let i1;
let i2;
let i3;
function setup() {
  createCanvas(800, 800);
  i1= loadImage("assets/Background.jpg") ;
  i2= loadImage("assets/Egg2.png");
  i3= loadImage("assets/Sawblade.png");
}

function draw() {
  background("grey");
  imageMode(CENTER);
  image(i1, width/2, height/2, width, height) ;
  image(i2, width/2, height/2+210, 150, 200) ;
  image(i3, width/2, height/2-175, 225, 225) ;


  fill("white");
text("You have 10 seconds to decide the fate of the egg", 190, 50);
textSize(20);
switch (state) {

  case 0: //normal state
  image(i3, width/2, height/2-175, 225, 225) ;
    v=10;
    break;

  case 1: //sawblade half way down
  image(i3, width/2, height/2-175, 225, 225) ;
   v=5;
  break;

  case 2: //sawblade replaces egg
  image(i3, width/2, height/2-175, 225, 225) ;
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