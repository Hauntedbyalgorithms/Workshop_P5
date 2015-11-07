var img;
var img2;
var img3;
var invasion;
var sound1;
var sound2;
var timerID;

function preload(){
  img = loadImage("piano.jpg");
  img2 = loadImage("piano2.jpg");
  
  sound1 = loadSound("piano1.mp3");
  sound2 = loadSound("piano2.mp3");
  // sound1.stop();
  // sound2.stop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
}

function draw() {
  if (mouseX < width/2) {
    background(img);
    
    sound1.play();
    sound2.stop();


  } else {
    background(img2);
    textSize(50);
    fill(4,5,6);
	  text("ha ha ha!", random(width), random(height));

    sound1.stop();
    sound2.play();
   }
}
