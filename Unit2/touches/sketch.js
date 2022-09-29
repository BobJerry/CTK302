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
      break ;
      
      case 1: 
       text("beep", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:
      text("boop", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
     text("beep", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}
