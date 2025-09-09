export function stars() {
    const count = window.innerWidth / 4;
    const scene = document.querySelector('.scene')!;
    let i = 0;
    while (i < count) {
        const star = document.createElement("span");
        const x = Math.floor(Math.random() * (window.innerWidth - 2));
        const y = Math.floor(Math.random() * (window.innerHeight - 2));
        const duration = Math.random() * 10;
        const size = Math.floor(Math.random() * 2) + 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        star.style.animationDuration = 5 + duration + 's';

        scene.appendChild(star);
        i++;
    }
}