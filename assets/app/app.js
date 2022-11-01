const body = document.querySelector('#body');
const nav = document.querySelector('#nav');
const header = document.querySelector('.header');
const menu = document.querySelector('#menu');
const introLanguage = document.querySelector('#intro__language');
const navLink = document.querySelectorAll('#nav__link');
const scrollUp = document.querySelector('.scrollUp');


document.addEventListener('DOMContentLoaded', () => {

    menu.addEventListener('click', (e) => {
        e.preventDefault();

        body.classList.toggle('active');
        nav.classList.toggle('active');
        menu.classList.toggle('active');
        introLanguage.classList.toggle('active');


    });

    function FixedHeader() {
        const headerH = header.clientHeight;
        document.body.style.paddingTop = headerH + 'px';

        if (window.scrollY >headerH) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
            document.body.style.paddingTop = 0;

        }
    }
    scrollUp.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        body.classList.remove('active');
        nav.classList.remove('active');
        menu.classList.remove('active');
        introLanguage.classList.remove('active');
    })

    window.addEventListener('scroll', FixedHeader);

    navLink.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let href = e.target.getAttribute("href").substring(1);
            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector(".header").offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const OffsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: OffsetPosition,
                behavior: "smooth",
            });

            body.classList.remove('active');
            nav.classList.remove('active');
            menu.classList.remove('active');
            introLanguage.classList.remove('active');
        });
    });


});
