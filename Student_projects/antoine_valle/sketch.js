var arrayOfFullText;
var arrayOfIsolatedPhrases = [];
var arrayOfSelectedText = [];
var fullText;
var stringLookedFor;
var indice;
var timerId;


function preload() {
    arrayOfFullText = loadStrings("z.txt");
}

function setup() {
    stringLookedFor = " rêve";
    fullText = arrayOfFullText.join(" ");
    fullText.replace("...", ".");
    fullText.replace(" .", ".");
    createCanvas(windowWidth, windowHeight);
    background(255);
    arrayOfIsolatedPhrases = isolatePhrases(fullText);
    for(i = 0; i < arrayOfIsolatedPhrases.length; i++) {
        if(isThereOneOccurrence(arrayOfIsolatedPhrases[i], stringLookedFor)) {
            arrayOfSelectedText.push(arrayOfIsolatedPhrases[i]);
        }
    }
    indice = int(random(arrayOfSelectedText.length));
    //print(arrayOfSelectedText.length);
    timerId = setInterval(mousePressed, 7000);
}

function draw() {
    background(1);
    fill(255);
    textSize(50);
    textAlign(CENTER,CENTER);
    text(arrayOfSelectedText[indice], 0, 0, width, height);
}

function isolatePhrases(mainOfIsolatedPhrases) {
    var result = [];
    var begin = 0;
    var end;
    for(var i = 0; i < mainOfIsolatedPhrases.length; i++) {
        if(mainOfIsolatedPhrases.charAt(i) == "." || mainOfIsolatedPhrases.charAt(i) == "?" || mainOfIsolatedPhrases.charAt(i) == "!") {
            this.end = i;
            if(this.begin == 0) {
                result.push(mainOfIsolatedPhrases.substring(this.begin, this.end + 1));
            }
            result.push(mainOfIsolatedPhrases.substring(this.begin + 2, this.end + 1));
            this.begin = this.end;
        }
    }
    return(result);
}

function isThereOneOccurrence(textOfIsThereOneOccurrence, findOfIsThereOneOccurrence) {
    for(var i = 0; i < textOfIsThereOneOccurrence.length; i++) {
        if(textOfIsThereOneOccurrence.substring(i, i + findOfIsThereOneOccurrence.length).toLowerCase() == findOfIsThereOneOccurrence.toLowerCase()) {
            return(true);
        }
    }
    return(false);
}

function mousePressed() {
    indice = int(random(arrayOfSelectedText.length));
}

