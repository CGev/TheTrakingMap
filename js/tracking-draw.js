
!function ($) {

  $.VISEO = $.VISEO || {};


   // ------------------------------------------
   //  PRIVATE
   // ------------------------------------------

  const drawPath = () => {
      drawCamera();
      $.getJSON('/tracking.json', drawPathJSON);
      $.getJSON('/tracking.json', displayClients);
  }

  const drawZone = () => {
      drawCamera();
      $.getJSON('/tracking.json', drawZoneJSON);
  }

  const COLORS = ["orange", "black", "red", "green", "yellow", "grey", "pink", "blue"];

  const drawCamera = () => {
      let canvas = $("#canvas")[0];
      let ctx = canvas.getContext('2d');

      ctx.imageSmoothingEnabled = false;

      ctx.beginPath();
      ctx.strokeStyle="black";   
      ctx.lineWidth="1";   
      ctx.rect(300, 375, 30, 25);
      ctx.fillStyle='rgb(155, 184, 211)';
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(300, 375);
      ctx.lineTo(285, 360);
      ctx.lineTo(345, 360);
      ctx.lineTo(330, 375);
      ctx.fill();
      ctx.stroke();
  }


      
  const drawPathJSON = (json) => {
      let $canvas = $("#canvas");
      let ctx = $canvas[0].getContext('2d');


      ctx.imageSmoothingEnabled = false;
      let path_rate=4;
      let canvasWidth  = $canvas.attr('width');
      let canvasHeight = $canvas.attr('height');

      for (let pt of json.points){
          let Cx=Math.trunc(pt.Wx/path_rate)+(canvasWidth/2);
          let Cz=canvasHeight - Math.trunc(pt.Wz/path_rate);

          let cercle = new Path2D();
          cercle.moveTo(Cx,Cz);
          cercle.arc(Cx, Cz, 2, 0, 2 * Math.PI);
          ctx.fillStyle = COLORS[pt.bodyId%10];
          ctx.fill(cercle);
    }
  }



  const displayClients = (json) => {
    let clients=[];
    let currentBodyId=null;

    //Initialization of clients[]: array of bodyId detected
    for (let pt of json.points){
        if(currentBodyId != pt.bodyId){
            clients.push(pt.bodyId);
            currentBodyId=pt.bodyId;
      }
    }
    //Construct new div according to clients[]
    for(let i=0; i <clients.length; i++){
        let color=COLORS[clients[i]%10];
        //let img = <img src="images/body-[color].png">
        let img="<img src= \"images/" + "body-" + color + ".png\"";       
        let txt="<p> Body" + clients[i] + "</p>";

        console.log(clients);
        console.log(txt + ": " + img);

        var $newdiv = $( "<div class='imageLegend' ></div>" );
        $( "imageLegend" ).append( img );
        $( "imageLegend" ).append( img );
    }
  }




   // ------------------------------------------
   //  PUBLIC  
   // ------------------------------------------

   const register = () => {
     $(document).on('click', '#button_draw', () => {
       drawPath()
     })
  }

  // Initialization on DOM ready
  $(document).ready(() => {
      register();
  });

}(jQuery);



/*
 --------------------------------------------------------------
JS Function to draw a hot zone, a zone with lot of traffic
-------------------------------------------------------------------- 
function draw_hotzone() {
        let canvas = document.getElementById("canvas");

        if (canvas.getContext) {
         let ctx = canvas.getContext('2d');

        }
      }

*/

      