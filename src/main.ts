import { stars } from './stars';
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="scene"></div>
  <div class="content">
    <div class="content__title">Hey, my name is</div>
    <div class="content__name">Cem Temuçin.</div>
    <div class="content__text">I'm a front-end software engineer.</div>
  </div>
`

stars();
window.addEventListener("resize", stars);