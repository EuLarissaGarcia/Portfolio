// Snow
document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container'); 
    
    if (!container) {
        console.error('Container não encontrado');
        return;
    }
    
    let count = 20; 
    for (var i = 0; i < count; i++) { 
        let leftSnow = Math.random() * window.innerWidth; 
        let topSnow = Math.random() * -100; 
        let widthSnow = Math.random() * 50 + 10; 
        let timeSnow = Math.random() * 5 + 5; 
        let blurSnow = Math.random() * 5;
        let div = document.createElement('div'); 
        div.classList.add('snow'); 
        div.style.left = leftSnow + 'px'; 
        div.style.top = topSnow + 'px'; 
        div.style.width = widthSnow + 'px'; 
        div.style.height = widthSnow + 'px'; 
        div.style.animationDuration = timeSnow + 's'; 
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
    }
});
