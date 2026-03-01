const audioContext = {
    playClick: () => {
        const osc = new AudioContext().createOscillator();
        const gain = new AudioContext().createGain();
        osc.connect(gain);
        gain.connect(new AudioContext().destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, 0);
        gain.gain.exponentialRampToValueAtTime(0.0001, 0.1);
        osc.start();
        osc.stop(0.1);
    },
    playMining: () => {
        // Sonido de pulso espacial
        console.log("Efecto de minado activado...");
    }
};
