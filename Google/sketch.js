var bubbles = [];
let url = "";
let Saul;
let Intro;

function preload() {
  Intro = loadSound("Assets/Intro.mp3");
}

function setup() {
  let key = "12z1p8FhWN8ZzM4lafgqcJbQaTp4bsOZKOEQX8AmDQEw"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  Saul = loadImage('Assets/saul.jpg');
  Intro.loop();
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Favorite Season?"],
        data[i]["Favorite Movie?"],
        data[i]["Favorite Board Game?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("blue");
  imageMode(CENTER)
  image(Saul, width/2, height/2, width, height) ;
// // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(season, movie, boardgame) {
    // only the order of these parameters matters!
    this.season = season;
    this.movie = movie;
    this.boardgame = boardgame;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("black");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.season + "\n" + this.movie + "\n" + this.boardgame,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0;
    
  }
  
}
function touchStarted() {
  getAudioContext().resume();
}
