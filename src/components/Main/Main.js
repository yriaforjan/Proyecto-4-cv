import "./Main.css";
import { cleanPage } from "../../utils/cleanPage";
import { Home } from "../../pages/Home/Home";
import { Education } from "../../pages/Education/Education";
import { Projects } from "../../pages/Projects/Projects";
import { Contact } from "../../pages/Contact/Contact";
import { setupProjectParallax } from "../../utils/animations";

export const Main = (page) => {
    let main = document.querySelector("main");

    if(!main){
        main = document.createElement("main");
        document.body.appendChild(main);
    }
    
    cleanPage(main);

    if (page === "home") {
        main.innerHTML = Home();
    } else if (page === "education") {
        main.innerHTML = Education();
    } else if (page === "projects") {
        main.innerHTML = Projects();
        setupProjectParallax();
    } else if (page === "contact") {
        main.innerHTML = Contact();
    }
};