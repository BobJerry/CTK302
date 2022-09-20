function setup() {
  createCanvas(800, 800);
  ellipseMode(CORNER);
  rectMode(BOTTOM);
  noStroke();
  line(700, 400, 700, 800);
}
function draw() {
  if (mouseIsPressed) {
    background("gray")
    fill("white");
    noStroke();
	fill("white");
  //moon
	ellipse(500, 25, 150, 150);
  //ghost
    ellipse(300,300, 150, 200)
	rect(300, 400, 150, 150);
    rectMode(BOTTOM);
    // eyebrows and eyes
     fill("black");
    rect (330,360,35,20);
    rect (385,360,35,20);
    rect (330,370,25,40);
    rect (385,370,25,40);
    rect ();
    //rect(365, 350, 15, 15);
    fill("green");
    rect(0, 600, 900, 1000); // Draw green rectangle using BOTTOM mode 
    // bowlerhat
    fill("black");
    rect(300,325,150,25);
    rect(325,250,100,100);
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