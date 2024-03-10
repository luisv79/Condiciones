function cambioBorde() {
    let imagen = document.querySelector(".imagen-cambio");
    imagen.classList.toggle('ponerBorde');
  }

  function calcularStickers() {
    let cantidad1 = parseInt(document.querySelector("#cantidad1").value) || 0;
    let cantidad2 = parseInt(document.querySelector("#cantidad2").value) || 0;
    let cantidad3 = parseInt(document.querySelector("#cantidad3").value) || 0;

    let totalStickers = cantidad1 + cantidad2 + cantidad3;

    if (totalStickers <= 10) {
      document.querySelector("#resultado").innerHTML = "Llevas " + totalStickers + " Giftcards";
    }else{
      document.querySelector("#resultado").innerHTML = "Sobrepasas la cantidad maxima de 10 Giftcards";
    }
  }


  function verificarPassword() {

    let password1 = document.getElementsByName("cantidades1")[0].value;
    let password2 = document.getElementsByName("cantidades2")[0].value;
    let password3 = document.getElementsByName("cantidades3")[0].value;

    let resultado = document.getElementById("resultado");

    if (password1 == 9 && password2 == 1 && password3 == 1) {
      resultado.textContent = "¡Contraseña 1 es correcta!";
    }else if (password1 == 7 && password2 == 1 && password3 == 4) {
      resultado.textContent = "¡Contraseña 2 es correcta!";
    } else {
      resultado.textContent = "¡Contraseña no es correcta!";
    }

   
  }

