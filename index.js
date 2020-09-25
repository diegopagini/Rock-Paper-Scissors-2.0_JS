const $PAPER = document.getElementById('paper').onclick = () => {
  opcionUsuario = papel;
}
const $ROCK = document.getElementById('rock').onclick = () => {
  opcionUsuario = piedra;
}
const $SCISSORS = document.getElementById('scissors').onclick = () => {
  opcionUsuario = tijera;
}

function aleatorio() {
  opcionCPU = Math.floor(Math.random() * 3);
}