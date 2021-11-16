// Apriamo il menu burger quando l'utente clicca sul menù burger
const burgerButton = document.querySelector('.header-right > a');
burgerButton.addEventListener('click',
    function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.add('active');
    }
);
// Chiudiamo il menù burger quando l'utente esce
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click',
    function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.remove('active');
    }
); 