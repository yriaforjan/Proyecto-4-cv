import "./Navbar.css";

export const Navbar = () => `
    <nav>
        <ul>
            <li class="logo">
                <a href="#" id="homeLink">
                    <img src="/images/logo.png" alt="Yria Forján logo"/>
                </a>
            </li>
            <div class="menu">
                <li>
                    <a href="#" id="educationLink">Education</a>
                </li>
                <li>
                    <a href="#" id="projectsLink">Projects</a>
                </li>
                <li>
                    <a href="#" id="contactLink">Contact</a>
                </li>
            </div>
            <li class="burgerMenu">
                <button class="burgerMenu" id="burgerMenu">
                        <img src="/public/icons/burger-menu.png" alt="menu icon"/>
                </button>
            </li>
            <li>
                <button id="themeBtn">
                    <img src="/public/icons/dark-mode.png" alt="theme icon"/>
                </button>
            </li>
        </ul>
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