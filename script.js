const menuToggle = document.getElementById('menuToggle');
const navLink = document.querySelector('.nav-link');

menuToggle.addEventListener('click', () => {
    navLink.classList.toggle('show');
});


