let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Touch me!", 5, 22) ; 
      loadImage("assets/saul.jpg");
      break ;
      
      case 1: 
       text("beep", 5, 22) ; 
      // put a picture here
      loadImage("assets/saul.jpg");
      break ;
      
      case 2:
      text("boop", 5, 22) ; 
      // put a picture here
      loadImage("assets/finger.jpg");
      break ;
      
      case 3:
     text("beep", 5, 22) ; 
      // put a picture here
      loadImage("assets/walt.jpg");
      break ;
    }
  }
