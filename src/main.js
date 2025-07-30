import "./style.css";
import { Header, changeTheme } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { burgerMenu } from "./components/Navbar/Navbar";
import { setupTransitions } from "./utils/transitions";

const init = () => {
  document.body.innerHTML += Header();
  Main("home");
  document.body.innerHTML += Footer();

  const transitionDiv = document.createElement("div");
  transitionDiv.id = "page-transition";
  document.body.appendChild(transitionDiv);
  setupTransitions();
};

document.addEventListener("DOMContentLoaded", () => {
  init();
  changeTheme();
  burgerMenu();
});
