import "./Navbar.css";

export const Navbar = () => `
    <nav>
        <div class="logo">
            <a href="#" id="logoLink">
                <img src="/images/logo.png" alt="Yria Forján logo"/>
            </a>
        </div>
        <ul class="menu">
            <li>
                <a href="#" id="homeLink">Home</a>
            </li>
            <li>
                <a href="#" id="educationLink">Education</a>
            </li>
            <li>
                <a href="#" id="projectsLink">Projects</a>
            </li>
            <li>
                <a href="#" id="contactLink">Contact</a>
            </li>
        </ul>
        <button class="burgerMenu" id="burgerMenu">
            <img src="/icons/burger-menu.png" alt="menu icon"/>
        </button>
            <button id="themeBtn">
                <img src="/icons/dark-mode.png" alt="theme icon"/>
            </button>
    </nav>
`;

export const burgerMenu = () => {
    const menu = document.querySelector(".menu");
    const burgerBtn = document.querySelector("#burgerMenu");

    burgerBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        menu.classList.remove("active");
    });
};