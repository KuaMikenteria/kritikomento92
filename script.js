(function () {
  // ----- THEME TOGGLE -----
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-toggle__icon");
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☾" : "☀";
    localStorage.setItem("theme", theme);
  }

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

  // ----- SCROLL FADE-IN ANIMATION -----
  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-element");

    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    fadeElements.forEach((el) => observer.observe(el));
  });
})();
