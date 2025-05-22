let audioContext: AudioContext | null = null;

export function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
  return audioContext;
}

export function createTickSound() {
  if (!audioContext) {
    audioContext = initAudioContext();
  }

  // Resume the audio context if it's suspended
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Create an oscillator for the tick sound
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  // Configure the oscillator with a lower frequency for a softer sound
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note (lower than before)

  // Configure a softer gain envelope with longer fade
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.05); // Lower volume, slower rise
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2); // Longer fade out

  // Connect the nodes
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Start and stop the oscillator
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
}
