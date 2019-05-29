function draw_point() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
    	alert("ok canvas!")
        var ctx = canvas.getContext('2d');

        var radgrad = ctx.createRadialGradient(100, 100, 15, 102, 20, 40);
        radgrad.addColorStop(0, '#00C9FF');
        radgrad.addColorStop(0.9, '#00B5E2');
        radgrad.addColorStop(1, 'rgba(0, 201, 255, 0)');
        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, 150, 150);
    }
}

function draw_path(){

    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


    	for(var i = 1; i < 4; i++) {
        	ctx.arc(75*i, 75*i, 5, 0, Math.PI * 2, true);
       		ctx.fill();
    	}
	}

function display() {
   alert("Hello World!");
}

function readData(){

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
 }
 }
 fichierBrut.send(null);
}