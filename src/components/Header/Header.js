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
  themeIcon.src = themeIcon.src.includes("/public/icons/dark-mode.png")
  ? "/public/icons/light-mode.png"
  : "/public/icons/dark-mode.png";
};

export const Header = () => `
  <header>${Navbar()}</header>
`;