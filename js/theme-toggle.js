const toggleButton = document.getElementById('mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

// Apply saved or system theme
if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  document.body.classList.add('dark-mode');
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
