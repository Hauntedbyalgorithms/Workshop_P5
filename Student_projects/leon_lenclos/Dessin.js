//////////OBJET DESSIN////////////

function Dessin(c) {
	var couleur;
	var points;
	var debut;
	this.couleur=c;
	this.points = [];
	this.fini = 0;
}


Dessin.prototype.tracer = function(decompte) {

	fill(this.couleur);
	stroke(couleurOpposee(this.couleur));
	strokeWeight(2);
	strokeJoin(ROUND);

	if (decompte <= 0) {
		background(255);
		endShape(CLOSE);
		this.fini = 1;
		return 1;									//Le dessin est fini
	} else if(this.points.length === 0) {
		beginShape();
		vertex(mouseX, mouseY);
		append(this.points, mouseX);
		append(this.points, mouseY);
		return 0;
	} else {
		vertex(mouseX, mouseY);
		append(this.points, mouseX);
		append(this.points, mouseY);
		return 0;
	}

};

Dessin.prototype.retracer = function() {

	fill(this.couleur);
	stroke(couleurOpposee(this.couleur));
	strokeWeight(2);
	strokeJoin(ROUND);
	beginShape();
	for (var i=0; i<this.points.length; i=i+2) {
		vertex(this.points[i],this.points[i+1]);
	}
	endShape(CLOSE);

};