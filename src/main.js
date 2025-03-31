import "./style.css";
import { Header, changeTheme } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { linkPage } from "./utils/linkPage";
import { Footer } from "./components/Footer/Footer";
import { burgerMenu } from "./components/Navbar/Navbar";

const init = () => {
    document.body.innerHTML += Header();
    
    Main("home");
    document.body.innerHTML += Footer();

    linkPage("homeLink", () => Main("home"));
    linkPage("educationLink", () => Main("education"));
    linkPage("projectsLink", () => Main("projects"));
    linkPage("contactLink", () => Main("contact"));
};

document.addEventListener("DOMContentLoaded", () => {
    init();
    changeTheme();
    burgerMenu();
});