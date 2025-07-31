import "./Home.css";
import { data } from "../../data/data";
import { Button } from "../../components/Button/Button";
import {
  initGlobalAnimations,
  resetFadeDownAnimations,
} from "../../utils/animations";

export const Home = () => {
  const template = `
    <section class="home">
      <div id="profile">
        <div id="intro" class="fade-down">
          <h1>${data.name}</h1>
          <p>${data.occupation}</p>
        </div>
        <img
          src="${data.avatar_light}"
          alt="avatar"
          id="avatar"
          class="fade-down"
          fetchpriority="high"
        />
      </div>

      <div id="about" class="fade-down">
        <p>${data.about}</p>
      </div>

      <div id="skills-carousel">
        <ul id="skills" class="skills-list fade-down">
          ${data.skills.map((skill) => `<li><p>${skill}</p></li>`).join("")}
        </ul>
      </div>

      ${Button("Out of code", null, true)}

      <section id="loves" style="display:none">
        <h3>I love</h3>
        <ul id="loveList">
          ${data.loves
            .map(
              (love) => `
              <li>
                <p class="icon">${love.icon}</p>
                <p>${love.name}</p>
              </li>`
            )
            .join("")}
        </ul>
      </section>

      <section id="hates" style="display:none">
        <h3>I hate</h3>
        <ul id="hateList">
          ${data.hates
            .map(
              (hate) => `
              <li>
                <p class="icon">${hate.icon}</p>
                <p>${hate.name}</p>
              </li>`
            )
            .join("")}
        </ul>
      </section>
    </section>
  `;

  setTimeout(() => {
    resetFadeDownAnimations();
    initGlobalAnimations();

    // Cambia avatar según tema
    const updateAvatar = () => {
      const avatar = document.getElementById("avatar");
      if (!avatar) return;

      avatar.style.opacity = "0";

      setTimeout(() => {
        const newSrc = document.body.classList.contains("light")
          ? data.avatar_dark
          : data.avatar_light;

        if (avatar.src !== newSrc) avatar.src = newSrc;

        setTimeout(() => {
          avatar.style.opacity = "1";
        }, 50);
      }, 250);
    };

    document.addEventListener("themeChanged", updateAvatar);

    // Alternar entre "I love" y "I hate"
    const toggleSections = () => {
      const loves = document.getElementById("loves");
      const hates = document.getElementById("hates");
      if (!loves || !hates) return;
      loves.style.display = loves.style.display === "none" ? "flex" : "none";
      hates.style.display = hates.style.display === "none" ? "flex" : "none";
    };

    const h3Loves = document.querySelector("#loves h3");
    const h3Hates = document.querySelector("#hates h3");
    if (h3Loves) h3Loves.addEventListener("click", toggleSections);
    if (h3Hates) h3Hates.addEventListener("click", toggleSections);

    // Botón para mostrar "I love" y hacer scroll
    const scrollButton = document.querySelector(".home button");
    if (scrollButton) {
      scrollButton.addEventListener("click", () => {
        const targetSection = document.getElementById("loves");
        if (!targetSection) return;
        targetSection.style.display =
          targetSection.style.display === "none" ? "flex" : "none";
        targetSection.scrollIntoView({ behavior: "smooth" });
        scrollButton.disabled = true;
      });
    }

    // Configurar carrusel infinito
    const setupInfiniteCarousel = () => {
      const carousel = document.querySelector("#skills-carousel");
      const skillsList = document.querySelector("#skills");
      if (!carousel || !skillsList) return;

      const originalItems = Array.from(skillsList.children);
      if (!skillsList.dataset.duplicated) {
        for (let i = 0; i < 3; i++) {
          originalItems.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            skillsList.appendChild(clone);
          });
        }
        skillsList.dataset.duplicated = "true";
      }

      const animationName = "scrollSkillsDynamic";

      const updateAnimation = () => {
        const contentWidth = skillsList.scrollWidth;
        const visibleWidth = carousel.getBoundingClientRect().width;
        const halfContentWidth = contentWidth / 2;
        const moveDistance = halfContentWidth - visibleWidth;

        if (moveDistance <= 0) {
          skillsList.style.animation = "none";
          return;
        }

        let styleTag = document.getElementById("dynamicScrollSkillsStyle");
        if (styleTag) styleTag.remove();

        styleTag = document.createElement("style");
        styleTag.id = "dynamicScrollSkillsStyle";
        styleTag.textContent = `
          @keyframes ${animationName} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${moveDistance}px); }
          }
        `;
        document.head.appendChild(styleTag);

        skillsList.style.animationName = animationName;
        skillsList.style.animationDuration =
          window.innerWidth <= 480 ? "30s" : "15s";
        skillsList.style.animationTimingFunction = "linear";
        skillsList.style.animationIterationCount = "infinite";
        skillsList.style.willChange = "transform";
      };

      updateAnimation();
      window.addEventListener("resize", updateAnimation);
    };

    setupInfiniteCarousel();
  }, 0);

  return template;
};
