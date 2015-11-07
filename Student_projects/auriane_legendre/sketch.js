var img;
var luminosite;
var volume, x1;

function preload() {
	mySound = loadSound("ebulition-legere-02.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	img=loadImage("10.jpg");

	mySound.setVolume(0.9);
	mySound.loop();
}

function draw() {

	noCursor();

	luminosite = map(mouseX, 0, width, 0,220);
	image(img, 0, 0, width, height);
	background(255, luminosite);

	mySound.setVolume(volume);

	x1=map(mouseX,-51,width,-51,width/2);

	volume=map(mouseY,0,height,1.0,0.0);

	//print("mouseX="+mouseX+"x1="+x1);

	fill(0,0,255);

	ellipse(x1,1.3*mouseY - 60,50,50);

}