function handleTap(event) {
    // 1. Ganancia de T-Coins y XP
    xp += 1;
    coins += (1 * level);

    // 2. Efecto visual brillante
    const container = document.getElementById('effect-container');
    const flash = document.createElement('div');
    flash.className = 'tap-flash';
    
    // Posicionamos el destello donde se hizo clic
    flash.style.left = `${event.clientX - 50}px`;
    flash.style.top = `${event.clientY - 50}px`;
    
    container.appendChild(flash);
    setTimeout(() => flash.remove(), 400);

    // 3. Animación de "Sacudida" del robot
    const robot = document.getElementById('robot-display');
    robot.style.transform = "scale(0.92) rotate(2deg)";
    setTimeout(() => robot.style.transform = "scale(1) rotate(0deg)", 50);

    updateUI();
    checkEvolution();
}
