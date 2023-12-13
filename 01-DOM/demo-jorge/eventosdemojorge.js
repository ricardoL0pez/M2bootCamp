      var arreglo = [1, 2, 3];

      var divs = document.querySelectorAll("div");
      var div = document.getElementById("uno");
      
      //divs es la lista de todos los elementos <div> en la página que seleccionaste previamente usando document.querySelectorAll("div").
      //.forEach(function(e) {...}) recorre cada elemento en la lista de divs y ejecuta la función proporcionada para cada elemento.
      divs.forEach(function(e) {
        e.addEventListener('click', function(evento) {
          if( evento.target.style.background == 'gray') {
            evento.target.style.background = 'plum';
          } else {
            evento.target.style.background = 'gray';
          }
          
        })
      })

      document.body.addEventListener('mousemove', function(e) {
        div.style.position = 'fixed';
        div.style.top = e.clientY + 5 +'px';
        div.style.left = e.clientX + 5+'px';

      })
      document.body.addEventListener("click", function (e) {
        console.log(e);
      });
