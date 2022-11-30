import template from './app.html?raw';
import { stars } from './stars';
import './app.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template;

stars();
window.addEventListener("resize", stars);
