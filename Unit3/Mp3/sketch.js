let cars = [] ;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects

  for (let i = 0 ; i < 20 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
 
}

function draw() {
  background("white");

  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
   }
  
  // add a "frog"
  
}



class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o); 
    rect(this.pos.x, this.pos.y, this.size, 25);
     // image(this.img, this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}