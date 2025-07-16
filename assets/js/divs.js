 const key = document.querySelector("#key");

      addEventListener("keydown", function (evento) {
        if (evento.key === "a") {
          key.style.backgroundColor = "pink";
        } else if (evento.key === "s") {
          key.style.backgroundColor = "orange";
        } else if (evento.key === "d") {
          key.style.backgroundColor = "#00aae4";
        } else if (evento.key === "q") {
          crearDiv("#572364");
        } else if (evento.key === "w") {
          crearDiv("grey");
        } else if (evento.key === "e") {
          crearDiv("#804000");
        }
      });

      function crearDiv(color) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.backgroundColor = color;
        nuevoDiv.style.margin = "10px";
        document.querySelector("section").appendChild(nuevoDiv);
      }