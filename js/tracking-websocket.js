
!function ($) {

    $.VISEO = $.VISEO || {};
  
  
  
  
     // ------------------------------------------
     //  PUBLIC
     // ------------------------------------------
  
     const register = () => {
       console.log('websocket')
    }
  
    // Initialization on DOM ready
    $(document).ready(() => {
        register();
    });
  
  }(jQuery);
  
  

/*<!-- --------------------------------------------------------------
Define json and stock it in localStorage to test datas of positions
-------------------------------------------------------------------- -->
  
      //localStorage.setItem("dataCamera",JSON.stringify(json));
      var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

    //Websocket communication to receive the JSON file 
    </script>

    <script type="text/javascript">
      function WebSocketTest()
      {
        if ("WebSocket" in window)
        {
          alert("WebSocket is supported by your Browser!");
          // Let us open a web socket
          var ws = new WebSocket("ws://localhost:1112/");
          ws.onopen = function()
          {
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            alert("Message is sent...");
          };
          ws.onmessage = function (evt)
          {
            var received_msg = evt.data;
            alert("Message is received...");
          };
          ws.onclose = function()
          {
            // websocket is closed.
            alert("Connection is closed...");
          };
        }
        else
        {
          // The browser doesn't support WebSocket
          alert("WebSocket NOT supported by your Browser!");
        }
      }
    </scrip*/