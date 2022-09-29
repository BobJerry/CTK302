function setup() {
  createCanvas(500, 500);
  f1 = loadFont("VCR.ttf");
  textAlign(CENTER);
}

function draw() {
  background("blue");
  fill("white");
  textFont(f1, 48) ;
  text("Bravo Vince", width / 2, 100);
}
