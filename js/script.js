const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

if (hamburgerElement && navElement) {
  hamburgerElement.addEventListener("click", () => {
    const isOpen = hamburgerElement.classList.toggle("open");

    navElement.classList.toggle("open", isOpen);
    hamburgerElement.setAttribute("aria-expanded", String(isOpen));
    hamburgerElement.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });
}
