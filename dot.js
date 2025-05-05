document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; 
    const slides = document.querySelectorAll(".card");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1; 
        } else if (index >= slides.length) {
            index = 0; 
        }

        currentIndex = index;

       
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
        });

   
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

   
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });

    
    window.addEventListener("resize", () => {
        showSlide(currentIndex);
    });

   
    showSlide(currentIndex);
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth" // Faz o scroll suave
            });
        }
    });
});