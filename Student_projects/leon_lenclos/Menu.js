////////OBJET MENU/////////


function Menu(t,c,x,y,facH,facL) {
	var txt; // ce qui est ecrit dans le rect (recuperé a la création de l'objet)
	var coul; // la couleur (recuperé a la création de l'objet)
	var placeX; // position en ligne et colone de menu
	var placeY;
	var positionX, positionY; // position en pixel
	var h, l, e; //hauteur, llargeur, espacement
	var actif; // vaut 1 si la souris est sur le rectangle sinon=0

	this.h = facH || 30;
	this.l = facL || 60;
	this.e = 5;
	this.txt =t;
	this.coul = c;
	this.placeX = x;
	this.placeY = y;
	this.actif = 0;
	this.positionX = this.e + this.placeX*(this.l+this.e); //defini positionX en fonction de placeX
 
	//cette boucle sert à faire que les menus ne depassent pas de la fenetre et reviennent a la ligne.
	while (this.positionX+this.l>width) {
		this.placeY ++;
		this.placeX = this.placeX - floor(width/(this.l+this.e));
		this.positionX = this.e + this.placeX*(this.l+this.e);
	}
	this.positionY = this.e + this.placeY*(this.h+this.e);// defii position Y en fonction de place Y

	//print("menu" + this.txt + " X " + this.placeX + " Y " + this.placeY);

}

Menu.prototype.dessiner = function() { //sert a afficher le menu

	var c;
	//cette condition sers a modifier la couleur et la valeur de this.actif en fonction de la position de la souris
	if (mouseX>this.positionX && mouseX<this.positionX+this.l && mouseY>this.positionY  && mouseY<this.positionY+this.h) {
		c=couleurOpposee(this.coul);
		this.actif = 1;
	} else {
		c=this.coul;
		this.actif = 0;
	}

	fill(couleurOpposee(c));
	stroke(c);
	strokeWeight(2);
	rect(this.positionX, this.positionY, this.l, this.h);
	fill(c);
	noStroke();
	textAlign(CENTER, CENTER);
	text(this.txt, this.positionX+this.l/2, this.positionY+this.h/2);
};