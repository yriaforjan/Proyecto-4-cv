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
  const themeIcon = document.querySelector("#themeBtn > img")
  themeIcon.src = themeIcon.src.includes("/icons/dark-mode.png")
  ? "/icons/light-mode.png"
  : "/icons/dark-mode.png";
};

export const Header = () => `
  <header>${Navbar()}</header>
`;