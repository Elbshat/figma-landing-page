const initApp = () => {
  const menuBtn = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    menuBtn.classList.toggle("toggle-btn");
  };

  menuBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  //////////////////////////////////////////////////
  const headerEl = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerEl.classList.add("backdrop-effect");
    } else if (window.scrollY <= 50) {
      headerEl.classList.remove("backdrop-effect");
    }
  });
  //////////////////////////////////////////////////
};

document.addEventListener("DOMContentLoaded", initApp);
