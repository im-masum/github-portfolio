
function toggleNav() {
  const aside = document.getElementById("aside");
  const icon = document.getElementById("toggleIcon");

  aside.classList.toggle("hide");
  aside.classList.toggle("show");

  if (aside.classList.contains("hide")) {
    icon.innerHTML = "&#9776;";
  } else {
    icon.innerHTML = "&times;";
  }
}

// Animated Text
const typed = new Typed("#typed-text", {
  strings: ["Frontend Web Developer","UI/UX Designer","Responsive Designer",],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true,
});

// Toggle nav for mobile (optional enhancement)
const navToggle = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");

navToggle.addEventListener("click", () => {
  aside.classList.toggle("open");
});

// footer section
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});