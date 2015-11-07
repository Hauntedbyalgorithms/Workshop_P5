// Ici, les variables de l'objet.
function cell(a, b, c) {
	var x;
	var y;
	var k;
	var mycolor;

	this.x = a;
	this.y = b;
	this.k = c;
	this.mycolor = 0
}
/*-------------------------------------------------------------*/
// Et là, les "mécanismes" de l'objet relié par "this."
/*-------------------------------------------------------------*/
// animate gère la grosseur du cercle, this.k (c) que l'on retrouve dans les deux
// derniers attributs de l'éllipse pour garder la proportion.
cell.prototype.animate = function() {
	this.k = this.k + random(-2, 2);
};
/*-------------------------------------------------------------*/
// Simple mouvement x et y en random.
cell.prototype.calculMouvement = function() {
	this.x = this.x + random(-2, 2);
	this.y = this.y + random(-2, 2);
};
/*-------------------------------------------------------------*/
// Simple rendu de l'éllipse avec les bons attributs.
// fill pour changer la couleur et l'opacité
cell.prototype.render = function() {
	noStroke();
	fill(5, 5, 5, this.mycolor);
	ellipse(this.x, this.y, this.k, this.k);
};
/*-------------------------------------------------------------*/
// La fonction d'opacité qui gère this.mycolor en mapping
// selon la grosseur du cercle : this.k
cell.prototype.colormeter = function() {
	this.mycolor = map(this.k, 5, 26, 50, 100);
};
/*-------------------------------------------------------------*/
// La mort de l'objet lorsque this.k atteint 26.
// ".splice" va permettre de retirer la cellule ciblé par this.i de l'array.
// Merci Rebecca ! :D
cell.prototype.death = function() {
	if (this.k >= 26 || this.k <= -26) {
		celltab.splice(this.i, 1);
	};
};
