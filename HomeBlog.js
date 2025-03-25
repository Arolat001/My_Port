const navBar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".mini-hamburger");

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});