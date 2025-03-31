import "./Home.css";
import { data } from "../../data/data";
import { Button } from "../../components/Button/Button";

export const Home = () => {
    const template = `
        <section class="home">
            <div id="profile">
                <div id="intro">
                    <h1>${data.name}</h1>
                    <p>${data.occupation}</p>
                </div>
                <img src="${data.avatar_light}" alt="avatar" id="avatar"/>
            </div>
            <div id="about">
                <p>${data.about}</p>
            </div>
            <ul id="skills">
                ${data.skills.map((skill)=>`
                        <li>
                            <p>${skill}</p>
                        </li>
                `).join("")}
            </ul>
            ${Button("Out of code")}
            <section id="loves" style="display:none">
                <h3>I love</h3>
                <ul id="loveList">
                    ${data.loves.map((love)=>`
                        <li>
                            <p class="icon">${love.icon}</p>
                            <p>${love.name}</p>
                        </li>
                    `).join("")}
                </ul>
            </section>
            <section id="hates" style="display:none">
                <h3>I hate</h3>
                <ul id="hateList">
                    ${data.hates.map((hate)=>`
                        <li>
                            <p class="icon">${hate.icon}</p>
                            <p>${hate.name}</p>
                        </li>
                    `).join("")}
                </ul>
            </section>
        </section>
    `;

    setTimeout(() => {
        const updateAvatar = () => {
            const avatar = document.getElementById("avatar");
            if (!avatar) return;
        
            avatar.src = document.body.classList.contains("light") 
            ? `${data.avatar_dark}`
            : `${data.avatar_light}`;
        };

        const toggleSections = () => {
            const lovesSection = document.getElementById("loves");
            const hatesSection = document.getElementById("hates");

            if (lovesSection && hatesSection) {
                lovesSection.style.display = lovesSection.style.display === "none" ? "flex" : "none";
                hatesSection.style.display = hatesSection.style.display === "none" ? "flex" : "none";
            }
        };

        document.addEventListener("themeChanged", updateAvatar);

        const h3Loves = document.querySelector("#loves h3");
        const h3Hates = document.querySelector("#hates h3");
        const scrollButton = document.querySelector(".home button");

        if (h3Loves) {
            h3Loves.addEventListener("click", toggleSections);
        }
        if (h3Hates) {
            h3Hates.addEventListener("click", toggleSections);
        }
        
        if (scrollButton) {
            scrollButton.addEventListener("click", () => {

                const targetSection = document.getElementById("loves");
                
                if (targetSection) {
                    targetSection.style.display = targetSection.style.display === "none" ? "flex" : "none";
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }

                scrollButton.disabled = true;
            });
        }
    }, 0);

    return template;
};