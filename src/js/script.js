window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger'),
          menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        if (burger.classList.contains('header__burger_active')) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }

        burger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
    })
})