document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const navList = document.getElementById("nav-list");

  if (mobileMenuButton && navList) {
    const toggleMenu = () => {
      document.body.classList.toggle("menu-open");

      navList.classList.toggle("active");

      mobileMenuButton.classList.toggle("active");

      const isExpanded = navList.classList.contains("active");
      mobileMenuButton.setAttribute("aria-expanded", isExpanded);
    };

    mobileMenuButton.addEventListener("click", toggleMenu);

    const navLinks = navList.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navList.classList.contains("active")) {
          toggleMenu();
        }
      });
    });
  }
});
