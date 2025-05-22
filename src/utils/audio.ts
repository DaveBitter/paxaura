let audioContext: AudioContext | null = null;

export const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
};

export const createTickSound = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  gainNode.gain.value = 0.1; // Lower volume
  oscillator.frequency.value = 440; // A4 note

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1); // Short beep
};
