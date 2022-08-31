
function alterarCorBlack() {
  let corBlack = document.getElementsByClassName('color')[0];
  corBlack.style.backgroundColor = "black";
}
alterarCorBlack();

function alterarCorGreen() {
  let corGreen = document.getElementsByClassName('color')[1];
  corGreen.style.backgroundColor = "green";
}
alterarCorGreen();

function alterarCorRed() {
  let corRed = document.getElementsByClassName('color')[2];
  corRed.style.backgroundColor = "red";
}
alterarCorRed();

function alterarCorBlue() {
  let corBlue = document.getElementsByClassName('color')[3];
  corBlue.style.backgroundColor = "blue";
}
alterarCorBlue();


let btn = document.getElementById('button-random-color');
let colorCores = document.getElementsByClassName('color');

function numerosAleatorios(){
  return Math.random() * 255;
}

function corAleatoria() {
  for(let index = 1; index < colorCores.length; index += 1){
    colorCores[index].style.backgroundColor = 'rgb(' + numerosAleatorios() + ', ' + numerosAleatorios() + ', ' + numerosAleatorios();
  }
}

btn.addEventListener('click', () => {
  corAleatoria();
}) 

