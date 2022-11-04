let f1;
let i1;
function setup() {
  createCanvas(innerWidth, outerHeight);
  i1 = loadImage("Assets/Saul.jpg")
  f1 = loadFont("Assets/VCR.ttf")
}

function draw() {
background("blue");
textFont("f1, 80")
text("Stop", 25, 25);
text("Better Call Saul", 400, 300);
text("Created by", 400, 450);
text("Vince Gilligan", 400, 500);
text("And Peter Gould", 400, 550);
}
