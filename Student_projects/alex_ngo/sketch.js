var celltab = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(15);
	// celltab[0] = new cell(width*0.85,height*0.75, 5);
}

function draw() {
		background(255,20)
/*-------------------------------------------------------------*/
// Création des mécaniques spécifiques aux objets invoqués.
// Merci Arnaud ! :D
// var i gère le numéro de la cellule.
	for (var i = 0; i < celltab.length;  i++) {
		celltab[i].animate();
		celltab[i].calculMouvement();
		celltab[i].render();
		celltab[i].colormeter();
		celltab[i].death();
	}
/*-------------------------------------------------------------*/
// Simple print pour vérifier l'array celltab ainsi
// que la mécanique de death.
	print(celltab);
}
/*-------------------------------------------------------------*/
// Invocation à la vollé de nouvelles cellules
// .push() permet d'ajouter à l'array celltab, les cellules.
// Merci Arnaud !
function mouseDragged() {
	celltab.push(new cell(mouseX,mouseY,5));
};
