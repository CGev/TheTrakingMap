
function draw_rect() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          ctx.fillStyle = 'rgb(155, 184, 211)';
          ctx.fillRect(100, 100, 200, 50);

          for(var i = 1; i < 4; i++) {
            ctx.arc(75*i, 75*i, 5, 0, Math.PI * 2, true);
            ctx.fill();
          }

          var radgrad = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
          radgrad.addColorStop(0, '#00C9FF');
          radgrad.addColorStop(0.9, '#00B5E2');
          radgrad.addColorStop(1, 'rgba(0, 201, 255, 0)');
          ctx.fillStyle = radgrad;
          ctx.fillRect(0, 0, 150, 150);
        }
      }