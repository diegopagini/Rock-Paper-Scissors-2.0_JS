let opcionUsuario;
let score = document.getElementById('score');
let scor = 0;

const PAPER = document.getElementById('paper').onclick = () => {
  opcionUsuario = papel;
  console.log(opcionUsuario)
  play(opcionUsuario);
}
const ROCK = document.getElementById('rock').onclick = () => {
  opcionUsuario = piedra;
  play(opcionUsuario);
}
const SCISSORS = document.getElementById('scissors').onclick = () => {
  opcionUsuario = tijera;
  play(opcionUsuario);
}

function aleatorio() {
  opcionCPU = Math.floor(Math.random() * 3);
}
// 0 = papel, 1 = piedra, 2 = tijera

function play(opcionUsuario) {
  aleatorio();
  if ( opcionUsuario === papel && opcionCPU === 0 ) {
    console.log('ganaste')
    score.value = scor;
    scor++
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

