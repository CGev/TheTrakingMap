
function draw_point(x, y) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var radgrad = ctx.createRadialGradient(x, y, 15, 102, 20, 40);
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

function test(){

		alert("test!");

	}