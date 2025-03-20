let container = document.getElementById('container'); 
let count = 20; // Ajuste conforme necessário

for (var i = 0; i < count; i++) { 
    let leftSnow = Math.random() * window.innerWidth; // Garante que cobre toda a largura da tela
    let topSnow = Math.random() * -100; // Começa um pouco acima da tela para parecer natural
    let widthSnow = Math.random() * 50 + 10; // Garante tamanhos variados
    let timeSnow = Math.random() * 5 + 5; // Duração da animação aleatória
    let blurSnow = Math.random() * 5; // Pequeno desfoque

    let div = document.createElement('div'); 
    div.classList.add('snow'); 
    div.style.left = leftSnow + 'px'; 
    div.style.top = topSnow + 'px'; 
    div.style.width = widthSnow + 'px'; 
    div.style.height = widthSnow + 'px'; 
    div.style.animationDuration = timeSnow + 's'; 
    div.style.filter = "blur(" + blurSnow + "px)";

    container.appendChild(div); // Adiciona ao container
}