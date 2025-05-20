
// Start Menu Toggle
document.getElementById('start-button').addEventListener('click', function() {
  const startMenu = document.getElementById('start-menu');
  startMenu.style.display = (startMenu.style.display === 'block') ? 'none' : 'block';
});

// Digital Clock for System Tray
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 10);
updateClock();
