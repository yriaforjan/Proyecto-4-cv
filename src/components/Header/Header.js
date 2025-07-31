import "./Header.css";
import { Navbar } from "../Navbar/Navbar";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeIcon();

    document.dispatchEvent(new Event("themeChanged"));
  });
};

export const changeIcon = () => {
  const themeIcon = document.querySelector("#themeBtn > img");
  themeIcon.src = themeIcon.src.includes("/icons/dark-mode.webp")
    ? "/icons/light-mode.webp"
    : "/icons/dark-mode.webp";
};

export const Header = () => `
  <header class="fade-down">${Navbar()}</header>
`;
