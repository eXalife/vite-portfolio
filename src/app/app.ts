import template from './app.html?raw';
import { stars } from './stars';
import './app.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template;


stars();
let innerWidth: number = window.innerWidth;
let timeout: number;
window.addEventListener("resize", () => {
    if (innerWidth !== window.innerWidth) {
        document.querySelector('.scene')!.innerHTML = '';
        clearTimeout(timeout);
        timeout = setTimeout(() => stars(), 500);
        innerWidth = window.innerWidth;
    }
});
