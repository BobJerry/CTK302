let f1;
let i1;
function setup() {
  createCanvas(500, 500);
  i1 = loadImage("Assets/Saul.jpg")
  f1 = laodFont("Assets/VCR.ttf")
}

function draw() {
background("lightblue");
textFont("f1, 80")
text("Better Call Saul", 100, 100);
text("Created by", 50, 50);
text("Vince Gilligan", 50, 50);
text("And Peter Gould", 50, 50);
}
