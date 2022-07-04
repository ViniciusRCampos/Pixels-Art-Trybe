let painel = document.getElementById('pixel-painel-board');
let corAtual = document.getElementsByClassName('selected');

function mudaCor(event) {
  let alvo = document.getElementsByClassName('');
}

function limpapixel() {
  while (painel.children.length != 0) {
    painel.removeChild(painel.firstElementChild);
  }
}

function pixels(value) {
  limpapixel();
  if (value > 50) {
    value = 50;
  } else if (value < 5) {
    value = 5;
  }
  painel.style.maxWidth = value * 40 + 'px';
  for (index = 0; index < value * value; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel-painel';
    pixel.addEventListener('click', mudaCor);
    painel.appendChild(pixel);
  }
}

pixels(5);
