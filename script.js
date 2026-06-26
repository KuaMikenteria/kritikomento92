(function () {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-toggle__icon");
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☾" : "☀";
    localStorage.setItem("theme", theme);
  }

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved && (saved === "dark" || saved === "light")) {
    setTheme(saved);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("dark");
  }

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
