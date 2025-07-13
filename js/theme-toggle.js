const toggleButton = document.getElementById('mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

// Helper to update button state
function updateToggleButton(isDark) {
  toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  toggleButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  toggleButton.textContent = isDark ? '🌙' : '🌞';
}

// Apply saved or system theme on load
if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  document.body.classList.add('dark-mode');
  updateToggleButton(true);
} else {
  updateToggleButton(false);
}

// Handle toggle interaction
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateToggleButton(isDark);
});
