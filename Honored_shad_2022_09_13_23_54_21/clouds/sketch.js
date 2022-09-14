function setup() {
  createCanvas(400, 400);
  ellipseMode(CORNER);
}

function draw() {
  background("blue");
  fill("yellow");
  ellipse(200, 25, 100, 100);
  fill("white")
  ellipse(250,150, 200,100)
  ellipse(0,150, 200,100)
}