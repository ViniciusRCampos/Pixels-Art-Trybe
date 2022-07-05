let painel = document.getElementById('pixel-painel-board');
let corAtual = document.querySelector('.selected');
let cssObj = window.getComputedStyle(corAtual, null);
let cores = document.getElementsByClassName('color');
let botao = document.getElementById('button-vqv');
let valor = document.getElementById('board-size').value;
let random = document.getElementsByClassName('random');
let botaoRandom = document.getElementById('button-random');
let botaoChoose = document.getElementById('choose-color');
let defined = document.querySelector('.defined');
let actualColor = document.querySelector('.actual');
let botaoLimpar = document.getElementById('clear-board');

function color() {
  defined.style.backgroundColor = document.getElementById('choose-input').value;
}

function randomColor() {
  for (index = 0; index < random.length; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    random[index].style.backgroundColor =
      'rgb(' + r + ' ,' + g + ' ,' + b + ')';
  }
}

function selecionaCor(event) {
  console.log(event.target);
  corAtual.classList.remove('selected');
  this.classList.add('selected');
  corAtual = document.querySelector('.selected');
  cssObj = window.getComputedStyle(corAtual, null);
  actualColor.style.backgroundColor =
    cssObj.getPropertyValue('background-color');
}

function clickCor() {
  for (index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', selecionaCor);
  }
}

function mudaCor(event) {
  console.log(event.target);
  //recebeID(corAtual)
  event.target.style.backgroundColor =
    cssObj.getPropertyValue('background-color');
}

function limpapixel() {
  while (painel.children.length != 0) {
    painel.removeChild(painel.firstElementChild);
  }
}

function inputValue() {
  valor = document.getElementById('board-size').value;
  if (valor > 50) {
    valor = 50;
    alert('Board invalido');
  } else if (valor < 5) {
    valor = 5;
    alert('Board invalido');
  }
  return valor;
}

function pixels() {
  limpapixel();
  let value = inputValue();

  painel.style.maxWidth = value * 40 + 'px';
  for (index = 0; index < value * value; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', mudaCor);
    painel.appendChild(pixel);
  }
}

function clear() {
  limpapixel();
  painel.style.maxWidth = 5 * 40 + 'px';
  for (index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', mudaCor);
    painel.appendChild(pixel);
  }
}

botaoLimpar.addEventListener('click', clear);
botaoChoose.addEventListener('click', color);
botao.addEventListener('click', pixels);
botaoRandom.addEventListener('click', randomColor);
randomColor();
pixels();
clickCor();
