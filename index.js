let opcionUsuario;

const PAPER = document.getElementById('paper').onclick = () => {
  opcionUsuario = papel;
  console.log(opcionUsuario)
  play();
}
const ROCK = document.getElementById('rock').onclick = () => {
  opcionUsuario = piedra;
  play();
}
const SCISSORS = document.getElementById('scissors').onclick = () => {
  opcionUsuario = tijera;
  play();
}

function aleatorio() {
  opcionCPU = Math.floor(Math.random() * 3);
}
// 0 = papel, 1 = piedra, 2 = tijera

function play(opcionUsuario) {
  aleatorio();
  if ( opcionUsuario === papel && opcionCPU === 0 ) {
    console.log('ganaste')
  } else if ( opcionUsuario === piedra && opcionCPU === 0 ){
    console.log('empate')
  } else if ( opcionUsuario === tijera && opcionCPU === 0 ){
    console.log('perdiste')
  } else if ( opcionUsuario === papel && opcionCPU === 1 ){
    console.log('ganaste') 
  } else if ( opcionUsuario === piedra && opcionCPU === 1 ){
    console.log('empate')
  } else if ( opcionUsuario === tijera && opcionCPU === 1 ){
    console.log('perdiste')
  } else if ( opcionUsuario === papel && opcionCPU === 2 ){
    console.log('perdiste')
  } else if ( opcionUsuario === piedra && opcionCPU === 2 ){
    console.log('ganaste')
  } else if ( opcionUsuario === tijera && opcionCPU === 2 ){
    console.log('empate')
  }
  console.log(opcionCPU)
}