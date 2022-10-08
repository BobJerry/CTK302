let state = 0;
let ilx = 0;
let v = 0;
let timer = 0;
let i1;
let i2;
let i3;
var mic;
var vol = 0;
function setup() {
  createCanvas(800, 800);
  i1= loadImage("assets/Background.jpg") ;
  i2= loadImage("assets/Egg2.png");
  i3= loadImage("assets/Sawblade.png");
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("grey");
  imageMode(CENTER);
  image(i1, width/2, height/2, width, height) ;
  vol = mic.getLevel();
  x = map(vol, 0, 1, 0, width);
  rect(x, 200, 50, 50);
fill("white");
textSize(20);
switch (state) {

  case 0: //normal state
  text("You have 10 seconds. Yell to save the poor egg", 190, 50);
  image(i3, width/2, height/2-175, 225, 225) ;
  image(i2, width/2, height/2+210, 150, 200) ;
    v=10;
    break;

  case 1: //sawblade half way down
  text("You have 10 seconds. Yell to save the poor egg", 190, 50);
  image(i3, width/2, height/2-25, 225, 225) ;
  image(i2, width/2, height/2+210, 150, 200) ;
   v=5;
  break;

  case 2: //sawblade replaces egg
  text("The egg cracked under pressure :(", 240, 50)
  image(i3, width/2, height/2+210, 225, 225) ;
  v=0;
  break;
}

timer++;
if (timer > 5 * 60) {
timer = 0;
state++;
if (state > 2) state=0;
}
fill("blue")

ilx = ilx+v;
if (ilx > width) {
ilx = 0;
}
}
function mouseReleased() {
state++;
if (state > 2) state = 0;
}
function touchStarted() {
  getAudioContext().resume();
}