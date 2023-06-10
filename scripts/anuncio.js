document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll(".side-menu__action");
  
    menuLinks.forEach(link => {
      const href = link.querySelector("a").getAttribute("href");
  
      if (href === "../pages/anuncios.html") {
        link.classList.add("active");
      }
    });
  });
  