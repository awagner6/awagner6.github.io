console.log("🟢 game.js is loading");

// === EARLY RETURN: Game is paused ===
document.addEventListener('DOMContentLoaded', () => {
  const waitForStartScreen = setInterval(() => {
    const startInstructions = document.getElementById('start-instructions');
    const playBtn = document.getElementById('playBtn');
    const byline = document.querySelector('.byline');

    if (startInstructions && playBtn) {
      startInstructions.innerHTML = "Order Up is now paused.<br><br>Stay tuned for an exciting update<br>about the future of the game!";
      playBtn.style.display = "none";
      if (byline) byline.style.display = 'none';
      document.body.classList.remove('hidden');
      clearInterval(waitForStartScreen);
    }
  }, 100);
  return; // Stop further game setup
});
