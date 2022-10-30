let cars = [];

function setup() {
  createCanvas(500, 500);
  for(let i = 0 ; i<20; i++) {
  cars.push(new Car());
  }
  // Spawn one object
  

}

function draw() {
  background(100);
  for(let i = 0 ; i<20; i++) {
 cars[i].display();
 cars[i].move();
  fill('white') ;
  text(myCar.x, 100, 100 ) ;
  }
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height/2) ;  // initialize your attributes here
    this.vel = createVector(random(3, -3), random(-3, 3));
  }

  // methods

  display() {
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add (this.vel);
    if (this.x > width) this.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width
    if (this.pos.y > height) this.pos.y = o;
    if (this.pos.y < 0) this.pos.y = height;
  }
  
}