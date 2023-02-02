import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('.hero'),
    content: document.querySelector('main'),
    searchInput: '#searchInput',
    searchButton: document.querySelector('#searchButton'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
