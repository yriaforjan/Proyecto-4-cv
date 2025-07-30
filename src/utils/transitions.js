import { Main } from "../components/Main/Main";
import { resetFadeDownAnimations, initFadeDownAnimations } from "./animations";
import { linkPage } from "./linkPage";

const transitionToPage = (page) => {
  const overlay = document.getElementById("page-transition");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  // Control de animación fade-down en header y footer según página
  if (header && footer) {
    const shouldFadeDown = page === "home";
    header.classList.toggle("fade-down", shouldFadeDown);
    footer.classList.toggle("fade-down", shouldFadeDown);
  }

  if (!overlay) {
    Main(page);
    if (page === "home") initFadeDownAnimations();
    return;
  }

  overlay.classList.add("active");

  setTimeout(() => {
    resetFadeDownAnimations();
    Main(page);

    setTimeout(() => {
      overlay.classList.remove("active");
      if (page === "home") initFadeDownAnimations();
    }, 300);
  }, 400);
};

let currentPage = "home";

export const setupTransitions = () => {
  const pages = ["home", "education", "projects", "contact"];
  pages.forEach((page) => {
    linkPage(`${page}Link`, () => {
      if (currentPage !== page) {
        transitionToPage(page);
        currentPage = page;
      }
    });
  });

  linkPage("logoLink", () => {
    if (currentPage !== "home") {
      transitionToPage("home");
      currentPage = "home";
    }
  });
};
