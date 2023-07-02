function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function eleccion(jugada) {
  let resultado = " ";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel ✋";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}
alert("Juguemos Piedra Papel o Tijeras!");
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra 🥌, 2 para papel ✋, 3 para tijera ✂");
  //alert("elegiste " + jugador)

  alert("TU eliges: " + eleccion(jugador));
  alert("PC elige: " + eleccion(pc));

  // Combate
  if (jugador == pc) {
    alert("EMPATE");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 3 && pc == 2) ||
    (jugador == 2 && pc == 1)
  ) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    perdidas = perdidas + 1;
  }
}
alert(
  "Ganaste " + triunfos + " veces. " + " Perdiste " + perdidas + " veces. "
);

/*if (jugador == 1) {
            alert("Elegiste 🥌")
        } else if(jugador == 2) {
            alert("Elegiste ✋")
        } else if(jugador == 3) {
            alert("Elegiste ✂")
        } else {
            alert("Elegiste PERDER")
        }
        if (pc == 1) {
            alert("PC Elige 🥌")
        } else if(pc == 2) {
            alert("PC Elige ✋")
        } else if(pc == 3) {
            alert("PC Elige ✂")
        }*/

// Combate
/*if(pc == jugador) {
            alert("EMPATE")
        } else if(jugador == 1 && pc == 3) {
            alert("GANASTE!")
        } else if(jugador == 2 && pc == 1) {
            alert("GANASTE!")
        } else if(jugador == 3 && pc == 2) {
            alert("GANASTE!")
        } else {
            alert("PERDISTE")
        }*/
