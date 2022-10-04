let state = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background(100);
  fill("yellow");
  rect(width/2, height/2, 200, 600);
  switch (state) {

    case 0:
      ellipse(width/2, height/2, 150, 150)
      ellipse(width/2, height/2, 150, 150)
      ellipse(width/2, height/2, 150, 150)
      break;

    case 1:
      text("1", 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}