function pintar(a) {
        a.target.style.backgroundColor = "black";
      }
      document.querySelector("#div1").addEventListener("click", pintar);
      document.querySelector("#div2").addEventListener("click", pintar);
      document.querySelector("#div3").addEventListener("click", pintar);
      document.querySelector("#div4").addEventListener("click", pintar);