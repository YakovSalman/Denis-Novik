const body = document.querySelector('#body');
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const introLanguage = document.querySelector('#intro__language');
const navLink = document.querySelectorAll('#nav__link');





document.addEventListener('DOMContentLoaded', () => {

    menu.addEventListener('click', (e) => {
        e.preventDefault();

        body.classList.toggle('active');
        nav.classList.toggle('active');
        menu.classList.toggle('active');
        introLanguage.classList.toggle('active');
    });

    for (let item of navLink) {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            body.classList.remove('active');
            menu.classList.remove('active');
            nav.classList.remove('active');
            introLanguage.classList.remove('active');

            const blokID = e.target.getAttribute('href').substr(1);

            document.getElementById(blokID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }

});
