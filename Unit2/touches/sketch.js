let numberOfTouches ;
let i1;
let i2;
let i3;

function setup() {
  createCanvas(400, 400);
  i1= loadImage("assets/saul.jpg") ;
  i2= loadImage("assets/finger.jpg");
  i3= loadImage("assets/walt.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Touch me!", 5, 22) ; 
      image(i1, width/2-200, height/2-200, 225, 225) ;
      break ;
      
      case 1: 
       text("beep", 5, 22) ; 
      // put a picture here
      image(i2, width/2, height/2-175, 225, 225) ;
      break ;
      
      case 2:
      text("boop", 5, 22) ; 
      // put a picture here
      image(i3, width/2, height/2-175, 2255, 225) ;
      break ;
      
      case 3:
     text("beep", 5, 22) ; 
      // put a picture here
      loadImage("assets/walt.jpg");
      break ;
    }
  }
  function mouseReleased() {
    state++;
    if (state > 2) state = 0;
    }
