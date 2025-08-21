  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // close menu when link clicked
  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });

