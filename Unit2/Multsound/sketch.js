let state = -1;
let s1, s2, s3;

function preload() {
  s1 = loadSound("assets/allthat.mp3")
  s2 = loadSound("assets/dreams.mp3")
  s3 = loadSound("assets/league.mp3")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

switch (state) {
  case -1:
  text ("Please click to start", 100, 100);
  break;

  case 0:
    background("blue");
    text("This is a song", 100, 100);
    if (!s1.isPlaying()) {
      s1.play();
    }
    break;
    case 1:
      background("red");
      text("This is another song", 100, 100);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;
      case 2:
        background("green");
        text("And wow, another after that!", 100, 100);
        if (!s3.isPlaying()) {
          s3.play();
        }
        break;
  }
}
function mouseReleased() {
  s1.stop() ;
  s2.stop() ;
  s3.stop() ;
  state++
  if (state > 2) state=0;
}

function touchStarted() {
  getAudioContext().resume();
}
