const menuIcons = document.querySelector('.menu-icons');
const navMenu = document.querySelector('.nav-menu');


menuIcons.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
