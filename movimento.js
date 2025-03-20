// GSAP Animation
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

 toggle.onclick = function() {
    menu.classList.toggle("active");
}

function showSection(section) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

  
    document.getElementById(section).classList.add('active');

    
    document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));

    
    event.currentTarget.classList.add('active');

}

