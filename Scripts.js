// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Highlight active section link on click
      document.querySelectorAll(".section-link").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});
