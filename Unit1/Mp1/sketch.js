function setup() {
  createCanvas(800, 800);
  ellipseMode(CORNER);
  rectMode(BOTTOM);
  noStroke();
  line(700, 400, 700, 800);
}
function draw() {
  if (mouseIsPressed) {
    background("black")
    fill("white");
    noStroke();
	fill("white");
	ellipse(500, 25, 150, 150);
    ellipse(300,300, 100, 200)
	rect(300, 400, 100, 100);
    rectMode(BOTTOM);
     fill("black");
    ellipse (315,350,15,15);
    ellipse(365, 350, 15, 15);
    fill("green");
    rect(0, 600, 900, 1000); // Draw green rectangle using BOTTOM mode 
    // bowlerhat
    fill("blue");
    rect(100,100,50,150);

  } else {
    // when the mouse isn't pressed!
    background("blue")
    fill("yellow");
    ellipse(500, 25, 150, 150);
    rectMode(BOTTOM);
    fill("green");
    rect(0, 600, 900, 1000); // Draw green rectangle using BOTTOM mode
  }
  fill("white");
  textSize(20);
  text("Bill, the ghost who does not know how he died. He goes out every night to discover how he was killed.", 25, 25, 400, 400);
  // this shows mouse location - comment it out when you're done!
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}