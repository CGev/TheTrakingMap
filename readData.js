//On lance la requête pour récupérer le fichier
var fichierBrut = new XMLHttpRequest();
fichierBrut.open("GET", "file:///C:/Users/ChloéGevrey/Documents/WEB/TheTrackingMap/data.txt", false);
//On utilise une fonction sur l'événement "onreadystate"
fichierBrut.onreadystatechange = function ()
{
if(fichierBrut.readyState === 4)
{
//On contrôle bien quand le statut est égal à 0
	if(fichierBrut.status === 200 || fichierBrut.status == 0)
	{
	//On peut récupérer puis traiter le texte du fichier
 		var texteComplet = fichierBrut.responseText;
 		alert(texteComplet);
 	}
 