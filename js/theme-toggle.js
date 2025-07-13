// theme-toggle.js

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle button click event
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("mode-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save preference
      const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", mode);
    });
  }
});
