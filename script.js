const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
 
hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
 
closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});
 
const fadeEls = document.querySelectorAll('.fade-in');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop view
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // 10% view
});
 
fadeEls.forEach(el => observer.observe(el));


// Aleksandras code /
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
}