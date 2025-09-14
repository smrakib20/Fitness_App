const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
      menuBtn.innerHTML = "&times;";
    } else {
      menuBtn.innerHTML = "&#9776;";
    }
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        menuBtn.innerHTML = "&#9776;";
      }
    });
  });
}
