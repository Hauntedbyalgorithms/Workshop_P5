var arr;
var arr2;
var current;
var current2;
var current3;
var timerID;
var s;
var b;
var a;
var z;
var img;
var img2;

function preload() {
 arr = loadStrings("fontaine.txt");
 img = loadImage("fontaine1.jpg");
 img2 = loadImage("fontaine2.jpg");

}
function setup() {
 createCanvas(windowWidth, windowHeight);

 textAlign(CENTER,CENTER);
 textSize(32);
 fill(6, 15, 18);

 current = "";
 current2= "";
 current3= "";

 s = arr.join(" ");

 a = s.replace(",", "");
 z = s.replace(" .", "");

 timerID = setInterval(chooser, 5000); // 3000 = millisecondes

 arr2 =[" !", " ?", "."];

 chooser();
}

function chooser(){
  // print(arr.length); // pour voir le nombre de ligne dns array (10 éléments = 0 à 9 ou 1 à 10)
  current = arr[floor(random(arr.length))]; //10 = le numéro de ligne, floor ou hint = nombre entier
  current2 = arr[floor(random(arr.length))];
  current3 = arr[floor(random(arr.length))] + arr2[int(random(arr2.length))];
}

function draw() {
  if (mouseX < width/2) {
     background(img);
  } else {
    background(img2);
  }

  text(current, width/2, height/2-150);
  text(current2, width/2, height/2-100);
  text(current3, width/2, height/2-50);
}
