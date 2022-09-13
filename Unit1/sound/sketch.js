let jazzyfrenchy;

function preload() {
  jazzyfrenchy = loadSound("assets/jazzyfrenchy.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  jazzyfrenchy.play() ;
}

function draw() {
  background("black");
  fill("white");
  text("the name of this song is jazzyfrenchy and I like it because jazz is pretty neat", 100, 100, 400, 400);
}

function mouseReleased () {
  if (jazzyfrenchy.isPlaying()){
      jazzyfrenchy.pause() ;
} else {
  jazzyfrenchy.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}

