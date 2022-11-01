let x = 0;
let f1;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/mugs.ttf");
}

function draw() {
  background(100);
  textSize(100);
  textFont(f1);
text("Unit 2 Rules", x,200);
x +=5;
if (x>width) {
  x=100;
}
}
function avatar() {
  fill("white");
    ellipse(300,300, 100, 200)
	rect(300, 400, 100, 100);
    rectMode(BOTTOM);
     fill("black");
    ellipse (315,350,15,15);
    ellipse(365, 350, 15, 15);
let x = 0;
let f1;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/mugs.ttf");
}

function draw() {
  background(100);
  textSize(100);
  textFont(f1);
text("Unit 2 Rules", x,200);
x +=5;
if (x>width) {
  x=100;
}
}
function avatar() {
  fill("white");
    ellipse(300,300, 100, 200)
	rect(300, 400, 100, 100);
    rectMode(BOTTOM);
     fill("black");
    ellipse (315,350,15,15);
    ellipse(365, 350, 15, 15);
}