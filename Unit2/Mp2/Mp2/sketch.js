let state = 0;
let ilx = 0;
let x = 0;
let y = 0;
let v = 0;
let timer = 0;
let i1;
let i2;
let i3;
let i4;
var mic;
var vol = 0;
let r = 0;
function setup() {
  createCanvas(800, 800);
  i1= loadImage("assets/Background.jpg") ;
  i2= loadImage("assets/Egg2.png");
  i3= loadImage("assets/Sawblade.png");
  i4= loadImage("assets/Yolk.png");
  f1 = loadFont("assets/Vampire.ttf");
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  x = width/2;
  angleMode(DEGREES);
}

function draw() {
  background("grey");
  imageMode(CENTER);
  image(i1, width/2, height/2, width, height) ;
  vol = mic.getLevel();
fill("white");
switch (state) {

  case 0: //starting state
  textFont(f1, 20);
  text("You have 10 seconds. Yell to save the poor egg", 190, 50);
  image(i3, width/2, height/2-175, 225, 225) ;
   //x = map(vol, 0, 1, 0, width);
  image(i2, width/2, height/2+210, 150, 200) ;
  x = width/2;
  y = 0;
    v=10;
    break;

  case 1: //game state
  //text("You have 10 seconds. Yell to save the poor egg", 190, 50);
   push();
   translate(width/2, y) ;
   rotate(r);
   r++;
  //image(i3, width/2, y, 225, 225) ;
  image(i3, 0,0, 225, 225) ;
  pop();
  image(i2, x, height/2+210, 150, 200) ;
  y++; 
  if (vol>.3) {
    x = x + vol * 2;
  }
  //print(y);
  if (y>415) {
    state=2;
  }
  if (x>565) {
    state=3;
  }
   v=5;
  break;

  case 2: //you lose 
  text("The egg cracked under pressure :(", 240, 50)
  image(i3, width/2, y, 225, 225) ;
  image(i4, x, height/2+240, 150, 150) ;
  v=0;

  break;
  case 3: //you win
  text("You Win!", 350, 50)
  image(i2, x, height/2+210, 150, 200)
  break;
}

// timer++;
// if (timer > 5 * 60) {
// timer = 0;
// state++;
// if (state > 2) state=0;
// }
// fill("blue")

ilx = x+v;
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