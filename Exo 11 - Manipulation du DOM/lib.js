

// Afficher le contenu div correspondant au titre sur lequel on clique

function showHxContent (pNumber) {
	vDiv = document.getElementById("title" + pNumber);
	vDiv.style.display = "block";
}

// Ecrire la fonction permettant de masquer le contenu de tous les div du document

function hideAllDivs () {
	vDivs = document.getElementsByTagName("div");
	for (var i=0; i<vDivs.length; i++) {
		vDivs.item(i).style.display="none";
}
}

// Ecrire la fonction qui permet d'afficher le contenu du ènieme titre, défini par le champ de saisie title

function alertTitle () {
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	alert(vHx.item(vIndice).firstChild.data);
}


//Ecrire la fonction premettant d'effacer le contenu du titre défini par le champ title

function deleteTitle () {

	vHx = document.getElementsByTagName ("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice-1;
	vHx.item(vIndice).removeChild (vHx.item(vIndice).firstChild);
}


//Ecrire la fonction qui permet d'affecter le contenu du titre defini par le champ title avec la valeur "Nouveau titre". On testera que le titre a ou non deja une valeur

function defineTitle () {
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	vText = document.createTextNode("Nouveau titre");
	if (vHx.item(vIndice).hasChildNodes()) {
		vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
	}
	vHx.item(vIndice).appendChild(vText);
	}