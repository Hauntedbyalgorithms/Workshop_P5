var x1, x2, x3, x4;
var y1, y2, y3, y4;
var x, y;
var s1, s2, s3, s4;
var steps;
var string_t;
var tar;
var val;
var acc, accm, maxacc;
// charge string et function pour random word text.
function preload() {
string_t = loadStrings('liste.txt');

}
// function pour prednre un mot au hasard dans la liste.txt
function methodlist(abc) {
    return abc[Math.floor(Math.random() * abc.length)];
}


function setup() {
// print('cimer Nono');
  // frameRate(4);
    createCanvas(windowWidth,windowHeight);
    background(255);
    maxacc = sqrt(sq(windowWidth) + sq(windowHeight));
}

function draw() {

 accm = dist(mouseX,mouseY,pmouseX,pmouseY);
 acc = map(accm,0,maxacc,1,50);

 frameRate(acc);

// print(frameRate());
if (mouseIsPressed) {
  traits();
  s1 = methodlist(string_t);
  textf();
  cursor(CROSS);
}
}

// gère le fait que le texte est placé sur les points des beziers
function textf() {
  textSize(20);
  strokeWeight(0);

  textFont("Helvetica");
  steps = 4;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    fill(random(255),random(255),random(255));
    text(s1,x4,y4);
      }
}

// génère les béziers et leurs points
function traits() {
blendMode(HARD_LIGHT);

x1 = width/2, x2 = random(width), x3 = random(width), x4 = random(width);
y1 = height/2, y2 = random(height), y3 = random(height), y4 = random(height);
noFill();
stroke(80);
strokeWeight(4);
bezier(x1, y1, x2, y2, x3, y3, x4, y4);
// fill(random(255),random(255),random(255));
steps = 4;
for (i = 0; i <= steps; i++) {
  t = i / steps;
strokeWeight(5);
  stroke(80);
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 4, 4);

}
}
