var context = new AudioContext(),
    oscillator,
    mousedown = false,
    gainNode = context.createGain();


gainNode.connect(context.destination);

// document.addEventListener("mousedown", function(e) {
//     mousedown = true;

//     oscillator = context.createOscillator();
//     oscillator.connect(gainNode);

//     calculateFrequencyAndGain(e);

//     oscillator.start(context.currentTime);
// });

function thereminSound(e){

    if (start) {
        mousedown = true;

    oscillator = context.createOscillator();
    oscillator.connect(gainNode);

    calculateFrequencyAndGain(e);

    oscillator.start(context.currentTime);
    }


}

function moveTheremin(e){
    mousedown = true;
    if (mousedown && start) {
        calculateFrequencyAndGain(e);
    }
}

function thereminStop(e){
    mousedown = false;
    start  = false;
    death = true;

    if (oscillator) {
        oscillator.stop(context.currentTime);
        oscillator.disconnect();
        location.href = 'gameOver.html';
    }
}

function calculateFrequencyAndGain(e) {
    var maxFrequency = 2000,
        minFrequency = 20,
        maxGain = 1,
        minGain = 0;

    // fix for click sound bug:
    oscillator.frequency.setTargetAtTime(
        ((e.clientX / window.innerWidth) * maxFrequency)
        + minFrequency, context.currentTime, 0.01);
    gainNode.gain.setTargetAtTime(
        1 - ((e.clientY / window.innerHeight) * maxGain)
        + minGain, context.currentTime, 0.01);
}