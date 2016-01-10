//var monTexte;
var arrayOfWords;
var arrayOfFullText;
var words = [];
var fullText;
var timer  = 4000;
var n = 0;
var fo  = [];
var index;

function preload () {

  arrayOfWords = loadStrings("chronoscope.txt");
  arrayOfFullText = loadStrings("chronoscope2.txt");
 
  // for (i=1; i<10; i++) {
  //   fo[i] = loadFont("Typo/" + i + ".ttf");
  // }
    fo[0] = loadFont("Typo/" + 1 + ".ttf");
    fo[1] = loadFont("Typo/" + 2 + ".ttf");
    //fo[2] = loadFont("Typo/" + 3 + ".ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  textAlign(CENTER, CENTER);
  fullText = arrayOfFullText.join(" ");
  fullText.replace(" .", ".");
  text(fullText, width/4, 3*height/4, 3*width/4, height/4);
  textSize(15);

}

function draw () {
  if(millis() > timer * n && n < arrayOfWords.length) {
    index = floor(random(fo.length));  
    textFont(fo[index]);
    text(arrayOfWords[n], floor(random(width)), floor(random(height)));
    n++;
  }

  //fo = ["1.ttf", "2.ttf", "3.ttf", "4.ttf", "5.ttf", "6.ttf", "7.ttf", "8.ttf", "9.ttf"];
   

}

// function mousePressed() {
//   background(random(225), random(225), random(225));
// }