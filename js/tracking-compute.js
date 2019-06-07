!function ($) {

   $.VISEO = $.VISEO || {};




    // ------------------------------------------
    //  PUBLIC
    // ------------------------------------------

    const register = () => {
      console.log('compute');
   }

   // Initialization on DOM ready
   $(document).ready(() => {
       register();
   });

}(jQuery);




/*

<!-- --------------------------------------------------------------
Functions to calculate journey time 
-------------------------------------------------------------------- -->




      function test_moment(){
        var day = moment("1995-12-25");
        console.log(moment(day, "DD-MM-YYYY"));
      }
      
    </script>


    <script type="text/javascript">
      


      function start_journey(search_bodyId) {
        loadJSON(function(response){
          json = JSON.parse(response);

          for(p=0; p<json['points'].length; p++){
            if(json['points'][p].bodyId == search_bodyId){
              var start=moment(json['points'][p].date + " " + json['points'][p].hour);
              console.log(start);

              return json['points'][p].day + " " + json['points'][p].hour ;
            }
          }
        });
      }

      function end_journey(search_bodyId) {
        loadJSON(function(response){
          json = JSON.parse(response);
          let last_step=null;

          for(p=0; p<json['points'].length; p++){
            if(json['points'][p].bodyId==search_bodyId){
              last_step=json['points'][p].day + " " +json['points'][p].hour;
            }
          }
          console.log(last_step);
          return last_step;
        });
      }

      function duraction_journey(search_bodyId){


      }*/