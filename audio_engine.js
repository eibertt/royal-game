/* TITAN B - MOTOR DE AUDIO */
const sounds = {
    click: new Audio('https://www.soundjay.com/buttons/button-16.mp3'), // Sonido temporal de clic
    win: new Audio('https://www.soundjay.com/buttons/button-09.mp3'),   // Sonido de premio
    bgm: new Audio('https://www.soundjay.com/free-music/cyber-city.mp3') // Música ambiente
};

function playClick() {
    sounds.click.currentTime = 0;
    sounds.click.play().catch(() => console.log("Audio esperando interacción"));
}

function playWin() {
    sounds.win.play();
}

// Activar música de fondo al primer toque
document.addEventListener('click', () => {
    sounds.bgm.loop = true;
    sounds.bgm.volume = 0.2;
    sounds.bgm.play().catch(() => {});
}, { once: true });
