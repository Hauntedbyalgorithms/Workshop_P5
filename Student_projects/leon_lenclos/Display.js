///// cette fonction demande une couleur et retourne sa couleur complementaire
function couleurOpposee (couleur) {
	return color(255-red(couleur),255-green(couleur),255-blue(couleur));
}
//////cette fonction trace la barre de chargement
function barreChargement (coul, decompte, decompteMax) {
		//Barre déchargement
	stroke(couleurOpposee(coul));
	strokeWeight(2);
	fill(couleurOpposee(coul));
	rect(5,5,width-10,30);
	// stroke(255);
	fill(coul);
	rect(5,5,map(decompte,0,decompteMax,0,width-10),30);
}
///////cette fonction dessine le crayon
function Crayon (couleurDessin) {
	fill(couleurDessin);
	stroke(couleurDessin);
	strokeWeight(2);
	line(mouseX,mouseY,pmouseX, pmouseY);
	fill(0);
	ellipse(mouseX,mouseY,3,3);
}
