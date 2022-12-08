// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let saul;

function setup() {
  createCanvas(400, 500);
    saul = loadImage("Assets/saul.jpg");
  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Amboy,IL,US&units=imperial&";

  //You can also use "zipcode"
   //substitute zip=61310 for q=Amboy,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=5664fc337511fb2e4e9896c9882fd30d" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;

}

function draw() {
//image(saul, width/2, height/2, width, height);
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
    image(saul, width/2, height/2, width, height);
      background(200);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
 

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}