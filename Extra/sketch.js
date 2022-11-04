let f1;
let i1;
function setup() {
  createCanvas(1000, 570);
  saul = loadImage("Assets/saul.jpg");
  vcr = loadFont("Assets/VCR.ttf");
}

function draw() {
background("blue");
fill("white");
textFont(vcr, 60);
text("Better Call Saul", 200, 300);
textFont(vcr, 30);
text("Created by", 350, 400);
text("Vince Gilligan", 350, 500);
text("And Peter Gould", 350, 600);
text("Rec", 45, 45);
}
