/* ====Toggler style switcher====== */
const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

function setActiveStyle(color) {
  const styles = document.querySelectorAll(".alternate-style");
  styles.forEach((style) => {
    if (style.getAttribute("title") === color) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* =======Theme light and dark mode ====== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.add("fa-sun");
  dayNight.querySelector("i").classList.add("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

