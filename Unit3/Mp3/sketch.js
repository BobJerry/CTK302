let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let Fly;
let Swatter;
let House;
let Ladybug;
let types = [];
let f1;
let s1;
let s2; 
let s3;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  imageMode(CENTER);
  Fly = loadImage("Assets/Fly.png");
  Swatter = loadImage("Assets/Swatter.png");
  House = loadImage("Assets/House.png");
  Fruitfly = loadImage("Assets/Fruitfly.png");
  f1 = loadFont("Assets/Squash.woff");
  s1 = loadSound("Assets/Pizza.mp3");
  s2 = loadSound("Assets/Final.mp3");
  s3 = loadSound("Assets/Radio.mp3")
  types = [Fly, Ladybug];

  // Spawn objects
  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // menu
    background("grey");
  imageMode(CENTER);
  image(House, width/2, height/2, width, height) ;
      fill("white");
      textFont(f1, 80);
      text("Click to Start", 275, 400);
      break;

    case 1:
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win
      fill("white");
      textFont(f1, 80);
      text("You Stopped the Infestation!", 90, 75);
      break;

    case 3: // lose
      fill("black");
      textFont(f1, 80);
      text("The Infestation has Only Just Begun...", 90, 75);
      break;
  }
}

function resetTheGame() {
  cars = [];

  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: // menu screen
      state = 1;
      break;

    case 2: // win screen
      resetTheGame();
      state = 0;
      break;

    case 3: // lose screen
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  // background("white");
  background("grey");
  imageMode(CENTER);
  image(House, width/2, height/2, width, height) ;
  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // add a "frog"
   //fill("green");
   //ellipse(frogPos.x, frogPos.y, 50, 50);
   image(Swatter, frogPos.x, frogPos.y);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  
  if (frogPos.x > width) frogPos.x = width ;
  
  
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(200, 400), 100); // initialize your attributes here
    this.velocity = createVector(0, random(1, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
    this.type = random(2) ;

    if (random(2)>1) {
      this.img = Fly;
    } else {
      this.img = Fruitfly;
    }
  }
  // methods

  display() {
    // // this can be text, images, or shapes
    // fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, this.size, 25);
    //image(this.img, this.pos.x, this.pos.y) ;
    image(this.img, this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.velocity);
    
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}



