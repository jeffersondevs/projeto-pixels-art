const pixelBoard = document.getElementById('pixel-board');
let quantidadePixel = 25;
let corSelecionada;

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

function numerosAleatorios() {
  return Math.random() * 255;
}

function corAleatoria() {
  let coresArmazenadas = ['black'];
  for (let index = 1; index < colorCores.length; index += 1) {
    colorCores[index].style.backgroundColor = 'rgb(' + numerosAleatorios() + ', ' + numerosAleatorios() + ', ' + numerosAleatorios();
    coresArmazenadas.push(colorCores[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(coresArmazenadas));
}

btn.addEventListener('click', () => {
  corAleatoria();
})

function criarDiv() {
  let newDiv = document.createElement('div');
  newDiv.className = 'pixel';
  return newDiv;
}

function geradorPixel() {
  for (let index = 0; index < quantidadePixel; index += 1) {
    let newPixel = criarDiv()
    newPixel.addEventListener('click', () => {
      newPixel.style.backgroundColor = corSelecionada;
    })
    pixelBoard.appendChild(newPixel);
  }
}

window.onload = () => {
  if (localStorage.colorPalette) {
    trocarCorBg()
  }
  geradorPixel();
  corSelecionada = document.querySelector('.selected').style.backgroundColor;
}

function trocarCorBg() {
  let armazenaLocalStorage = JSON.parse(localStorage.colorPalette)
  for (let index = 0; index < colorCores.length; index += 1) {
    colorCores[index].style.backgroundColor = armazenaLocalStorage[index];
  }
}

let selecionarCor = document.getElementsByClassName('color');
for (let index = 0; index < selecionarCor.length; index += 1) {
  selecionarCor[index].addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected')
    event.target.classList.add('selected');
    corSelecionada = event.target.style.backgroundColor;
  })
}




