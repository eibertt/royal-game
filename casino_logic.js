/* TITAN B - CASINO LOGIC REPARADO */

// Esta es la pieza que faltaba: la animación de brillo
function aplicarEfectoGiro() {
    const panel = document.querySelector('.hologram-panel');
    if (panel) {
        panel.style.boxShadow = "0 0 50px #ff00de";
        setTimeout(() => {
            panel.style.boxShadow = "0 0 15px #00e5ff";
        }, 2000);
    }
}

function jugarRuleta() {
    if (typeof coins === 'undefined') return;
    
    if (coins < 500) {
        alert("¡Energía insuficiente! Necesitas 500 T-Coins.");
        return;
    }

    coins -= 500;
    if (typeof updateUI === 'function') updateUI();
    
    aplicarEfectoGiro(); // Ahora sí existe

    setTimeout(() => {
        const azar = Math.random();
        if (azar < 0.05) {
            alert("¡JACKPOT! 1 USDT GANADO");
        } else if (azar < 0.40) {
            coins += 1000;
            alert("¡GANASTE 1000 T-COINS!");
        } else {
            alert("Sigue intentando, Piloto.");
        }
        if (typeof updateUI === 'function') updateUI();
    }, 2000);
}
