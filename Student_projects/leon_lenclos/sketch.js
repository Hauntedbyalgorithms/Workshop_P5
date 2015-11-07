
var decompte, decompteMax; //durée du dessin en frm.
var bib = []; // array déstinée à contenir des objets dessins : tout ce qui est dessiné.
var menu; // indique dans quel menu on se situe : 1=accueil  2=dessins  3=bibliotheque
var menuBibActif; // indique quel dessin afficher quand on est dans la bibliothèque.
var compteAR, voirBib, chaqueDessin, voirDessinateur, boutonAccueil; // differents objets menu, chaque dessin est une array d'objet menu.

function setup() {
	createCanvas(windowWidth-10, windowHeight-10);


	decompte=0;
	decompteMax=0;
	frameRate(50); //ainsi le decompte est en 50e de seconde, facile a transformer en seconde dans le compteur
	menu =1;
	menuBibActif =0;
	compteAR = new Menu(3,color(100),0,1);
	voirBib = new Menu("BIBLI",color(100),0,2);
	voirDessinateur = new Menu("DESSIN",color(random(256),random(256),random(256)),0,0);
	boutonAccueil = new Menu("TU CLIC UNE FOIS POUR GAGNER UNE SECONDE DE DESSIN,\nPENDANT LE DESSIN TU CLIC ENCORE POUR GAGNER UNE SECONDE DE PLUS,\nINNUTILE DE MAINTENIR LE CLIC PENDANT QUE TU DESSINE.",color(random(256),random(256),random(256)),0,0,height-5,width-5);
	chaqueDessin = [];
}

function draw() {

	if (menu==1){
		drawMenu1();
	} else if (menu ==2) {
		drawMenu2();
	} else if (menu == 3) {
		drawMenu3();
	}
}

function mousePressed () {
// DANS LE MENU 1 et 2
	if (menu ==1 || menu==2) {
		if (voirBib.actif) { //quand on clic sur le bouton du menu 3
			menu=3;			//on y va
		} else {
			menu =2; 			//si on y etait pas deja on viens sur le menu 2
			if(decompte <=0) {  // si le dessin d'avant est fini on en recréé un.
				background(255);
				decompteMax=50;	//reinitialisation de decompte max
				append(bib, new Dessin(color(random(256),random(256),random(256)))); //nouvel objet dessin
				append(chaqueDessin, new Menu(bib.length, bib[bib.length-1].couleur,bib.length,0)); //nouvel objet menu pour le dessin
			}
			decompte = decompte + 50; //quoi qu'il arrive on auguemente le compteur de 50 a chaque clic
			if (decompte>decompteMax) { //le decompteMax se met a jour si besoin
				decompteMax=decompte;
			}
		}
// DANS LE MENU 3
	} else if (menu == 3) {
		if (voirDessinateur.actif) { //quand on clic sur le bouton du menu 2
			menu=2; // on y va
			background(255); // on efface tout
		}

		
	}
}


//ACCUEIL
function drawMenu1 () {
boutonAccueil.dessiner();
}

//DESSINATEUR
function drawMenu2 () {
	background(255,2); // disparition progressive du crayon pour decourager ceux qui veulent faire des trop grand dessins

	barreChargement(bib[bib.length-1].couleur,decompte,decompteMax); // dessine la barre de chargement
	
	bib[bib.length-1].tracer(decompte) ; //c'est donc avec cette fonction que la forme est dessinee par l'uttilisateur
	
	compteAR.txt=nf(decompte/50,2,2);
	compteAR.coul=bib[bib.length-1].couleur;
	compteAR.dessiner(); //dessine le compteur

	voirBib.coul=bib[bib.length-1].couleur;
	voirBib.dessiner(); //dessine le bouton vers le menu3 : bibliothèque


	if(decompte>0) {
		decompte --; // décrémentation compteur
		Crayon(bib[bib.length-1].couleur); //ici c'est le crayon qui montre a l'uttilisateur ou il en est.
	}
}

//BIBLIOTHÈQUE
function drawMenu3 () {
	background(255); // Efface tout
	voirDessinateur.dessiner(); //dessine le menu
	for(var i=0 ; i<bib.length ; i++) {	//on fait le tour de tous les dessins
		if (chaqueDessin[i].actif) {	//on trouve celui qui est designé par la souris
			menuBibActif = i;			//on note son numero dans menuBibActif
		}
		chaqueDessin[i].dessiner();  //on dessine le menu de chaque dessin
	}

	bib[menuBibActif].retracer(); //on trace le dessin designé par la souris
}


