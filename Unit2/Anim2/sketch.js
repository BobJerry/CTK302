let x = 0;
function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(100);
  push();
  translate(x,0);
 avatar();
 x += 3;
 if (x>width) {
  x= 0;
}
pop();
}


function avatar() {
  fill("white");
  ellipse(350,300, 100, 200)
	rect(300, 300, 100, 150);
  //rectMode(BOTTOM);
     fill("black");
    ellipse (320,255,15,15);
    ellipse(370, 255, 15, 15);
let x = 0;
function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(100);
  push();
  translate(x,0);
 avatar();
 x += 3;
 if (x>width) {
  x= 0;
}
pop();
}


function avatar() {
  fill("white");
  ellipse(350,300, 100, 200)
	rect(300, 300, 100, 150);
  //rectMode(BOTTOM);
     fill("black");
    ellipse (320,255,15,15);
    ellipse(370, 255, 15, 15);
}