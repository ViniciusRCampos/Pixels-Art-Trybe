let painel = document.getElementById('pixel-painel')

function pixels(){
    let pixel = document.createElement('div');
    pixel.className = 'pixel-painel';
    for (index = 0; index < 5; index +=1){
        painel.appendChild(pixel);
    }
}

window.onload = pixels(5);