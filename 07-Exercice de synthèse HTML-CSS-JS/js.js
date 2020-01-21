window.onload = init;
var divResult;
var divTexte;

function init() {
	divResult = document.getElementsByTagName('div')[1];
	/*insertion des images et attribution d'un id à chacun*/
	for (var k in animaux) {
		divResult.innerHTML += "<img id='" + animaux[k].name + "' src='images/" + animaux[k].file + "'/>";
	}

	/*Appel la fonction eventsOnClick qui regroupe les 3 evenements necessaire : click sur bouton 1 et 2 et sur image*/
	eventsOnClick(); 

}

/*Méthode */
function eventOnClick() {

	var im = document.getElementsByTagName("img"); //on recupere toutes les images (11) 
	var btn = document.querySelectorAll("button"); // on récupère les 2 boutons



	/* Evenement sur bouton 1 -- affiche que les images correspondant aux animaux sauvages*/
	btn[0].addEventListener("click", function () {
		for (var k in animaux) {							// on parcourt tout les animaux de l'objet animaux
			if (animaux[k].domestic == true) {				// on verifie si lanimal est domestique si oui on le fais diparaitre
				im[k].style.display = "none";
			}
		}
	})

	
	
	/* Evenement sur bouton 2 -- on affiche toutes les images de lobjet animaux */
	btn[1].addEventListener("click", function () {
		for (var animal = 0; animal < im.length; animal++) {			//boucle qui fais reapparaitre tt les images
			im[animal].style.display = "";
		}
	})



	/* Evenement sur image -- si l'on clique sur une image on l'efface */
	for (var image = 0; image < im.length; image++) {					// On parcourt toutes les images dans la boucle for dans lequel on verifie si l'on clique sur une image
		im[image].addEventListener("click", function () {
			document.getElementById(this.id).style.display = "none";  	// Cache l'image en fonction de son id, (<im id)
			console.log(this);											 //  this correspond à l'image clické sous la forme <img id="nom_animal" src="images/nom_animal.png" style="display: none;"></img>
		})
	}
}

