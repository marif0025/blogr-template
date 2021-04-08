import '../scss/style.scss'
import burgerMenu from './modules/burgermenu';

import './modules/menu'

// Burger menu for mobile screens
burgerMenu({
    container: 'burger-menu',
    active: 'open-menu',
    onClose: () => {
        document.body.classList.remove('active-menu');
    },
    onOpen: () => {
        document.body.classList.add('active-menu');
    }
});
