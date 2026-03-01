/* TITAN B - RENDERING ENGINE */
const RenderEngine = {
    init() {
        console.log("Motor de renderizado iniciado...");
        this.applyGlow();
    },
    
    // Hace que el robot respire (animación suave)
    applyGlow() {
        const robot = document.getElementById('robot-display');
        if(robot) {
            robot.style.transition = "all 2s ease-in-out";
            setInterval(() => {
                robot.style.filter = "drop-shadow(0 0 25px #00e5ff)";
                setTimeout(() => {
                    robot.style.filter = "drop-shadow(0 0 10px #ff00de)";
                }, 2000);
            }, 4000);
        }
    },

    // Crea los números flotantes cuando minas
    spawnPopup(x, y, amount) {
        const el = document.createElement('div');
        el.className = 'floating-xp';
        el.innerHTML = `+${amount}`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 800);
    }
};

RenderEngine.init();
