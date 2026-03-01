const canvas = document.getElementById('galaxy-bg');
const ctx = canvas.getContext('2d');

let stars = [];
let particles = [];
const STAR_COUNT = 180;

function initGalaxy() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    
    // Crear Estrellas con diferentes profundidades
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8,
            speed: Math.random() * 0.4 + 0.05,
            opacity: Math.random()
        });
    }
}

function drawGalaxy() {
    // Fondo base negro puro para resaltar el neón
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar Nebulosa de Ambiente (Efecto Hangar)
    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0, 
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
    );
    gradient.addColorStop(0, 'rgba(0, 229, 255, 0.06)'); // Brillo Cian central
    gradient.addColorStop(0.5, 'rgba(255, 0, 222, 0.03)'); // Brillo Fucsia lateral
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Animar Estrellas
    stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        
        // Si la estrella sale de pantalla, vuelve arriba
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        // Efecto de centelleo
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.8) star.opacity = 0.8;
    });

    requestAnimationFrame(drawGalaxy);
}

window.addEventListener('resize', initGalaxy);
initGalaxy();
drawGalaxy();
