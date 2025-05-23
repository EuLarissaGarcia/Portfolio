document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o GSAP está carregado
    if (typeof gsap === 'undefined') {
        console.error('GSAP não foi carregado');
        return;
    }
    
    // Animações GSAP
    gsap.from(".image-0", 1.2, {opacity: 0, y:150, delay: 0.8});
    gsap.from(".image-1", 1.2, {opacity: 0, y:150, delay: 0.5});
    gsap.from(".image-2", 1.2, {opacity: 0, y:150, delay: 1});
    gsap.from(".image-3", 1.2, {opacity: 0, y:150, delay: 1.3});
    gsap.from(".image-4", 1.2, {opacity: 0, y:150, delay: 2});
    gsap.from(".image-5", 1.2, {opacity: 0, y:150, delay: 1.5});
    gsap.from("h1", 1.2, {opacity: 0, y:-80, delay: 1.4});
    gsap.from("p", 1.2, {opacity: 0, y:-80, delay: 1.25});
    gsap.from("button", 1.2, {opacity: 0, y:-80, delay: 1});
    
    // Toggle Menu Function
    const menu = document.querySelector(".menu");
    const toggle = document.getElementById("toggle");
    
    if (toggle && menu) {
        toggle.onclick = function() {
            menu.classList.toggle("active");
        }
    }
    
    // Função para mostrar seções (Formação/Trabalhos)
    window.showSection = function(section) {
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        document.querySelectorAll('.formation .button').forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active ao botão clicado
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('active');
        }
    }
});