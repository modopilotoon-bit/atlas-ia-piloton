const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const filterButtons = document.querySelectorAll(".filter-pill");
const toolCards = document.querySelectorAll(".tool-card");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.dataset.open === "true";
    mobileNav.dataset.open = String(!isOpen);
    mobileNav.hidden = isOpen;
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.dataset.open = "false";
      mobileNav.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    toolCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.hidden = !matches;
    });
  });
});
