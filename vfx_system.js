/* TITAN B - SISTEMA DE EFECTOS VISUALES */
function spawnParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'vfx-particle';
    particle.innerText = "+10"; // El valor que ganas
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);

    // Animación de subida y desaparición
    setTimeout(() => {
        particle.style.transform = 'translateY(-100px) scale(1.5)';
        particle.style.opacity = '0';
    }, 10);

    setTimeout(() => particle.remove(), 1000);
}

function shakeRobot() {
    const robot = document.getElementById('robot-display');
    robot.style.transform = 'scale(0.95) rotate(2deg)';
    setTimeout(() => {
        robot.style.transform = 'scale(1) rotate(0deg)';
    }, 50);
}
