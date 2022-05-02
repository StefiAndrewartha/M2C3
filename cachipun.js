let jugar = true;
while(jugar == true){
  function numeroRandom(min, max) {
    return Math.random() * (max - min) + min;
}
  let numero = numeroRandom(1, 4);
  numero = parseInt(numero);
  let opcion = prompt("Ingrese Piedra, Papel o Tijera");
  opcion = opcion.toLowerCase();
  // 1 papel
  // 2 piedra
  // 3 tijera
document.write(`<h1>`)
  if(numero == 1){
      numero = "papel"
      console.log(numero);
      if(opcion == "piedra"){
          document.write("Perdiste");
      }else if(opcion == "tijera"){
        document.write("Ganaste");
    }else if(opcion == "papel"){
        document.write("Empate");
    }
      
  }else if(numero == 2){
      numero = "piedra";
      console.log(numero);
      if(opcion == "tijera"){
        document.write("Perdiste");
    }else if(opcion == "papel"){
        document.write("Ganaste");
    }else if(opcion == "piedra"){
        document.write("Empate");
    }
  }else if(numero == 3){
      numero = "tijera"
      console.log(numero);
      if(opcion == "papel"){
        document.write("Perdiste");
      }else if(opcion == "piedra"){
        document.write("Ganaste");
      }else if(opcion == "tijera"){
        document.write("Empate");
      }
  }
// template strings
  document.write(` porque la computadora eligio ${numero} y tu escogiste ${opcion} </h1>`);
  jugar = prompt("Quieres volver a jugar?");
  if(jugar == "si"){
    jugar = true;
  }else{
    jugar = false;
  }
}
  