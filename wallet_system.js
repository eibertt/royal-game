/* TITAN B - PROTOCOLO DE PAGO SEGURO */

const ADMIN_WALLET = "UQCa4JhWm99Dv9SfeW2fYskEd8VXY-SdJdrWY0auqx5Fm4j9"; 

const WALLET_CONFIG = {
    minimoRetiroUSDT: 5.0,
    tasaCambio: 10000, 
    feeVerificacionTON: 0.1,
    isVerified: false
};

// Función para procesar la compra de Naves ($1 - $15 USDT)
async function procesarCompraNave(precioUSDT, naveId) {
    console.log(`Iniciando pago de ${precioUSDT} USDT a ${ADMIN_WALLET}`);
    
    // Aquí se conecta con TonConnect (lo activaremos en el index.html)
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
            {
                address: ADMIN_WALLET,
                amount: (precioUSDT * 1000000000).toString(), // Conversión a NanoTokens
            }
        ]
    };

    try {
        // El sistema pedirá la firma en TonKeeper
        alert(`Redirigiendo a TonKeeper para el pago de ${precioUSDT} USDT...`);
        // Lógica de confirmación exitosa:
        // registrarNave(naveId);
    } catch (e) {
        console.error("Pago cancelado", e);
    }
}

function solicitarRetiro() {
    const usdtEquivalente = coins / WALLET_CONFIG.tasaCambio;
    if (usdtEquivalente < WALLET_CONFIG.minimoRetiroUSDT) {
        alert("Balance insuficiente para retiro.");
        return;
    }
    alert("Solicitud enviada al administrador.");
}
