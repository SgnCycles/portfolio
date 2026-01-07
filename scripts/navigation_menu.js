const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelector('.nav-menu-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  })
})