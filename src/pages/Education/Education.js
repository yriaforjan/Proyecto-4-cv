import "./Education.css";
import {
  EducationCard,
  setupEducationCardEvents,
} from "../../components/EducationCard/EducationCard";
import { data } from "../../data/data";

export const Education = () => {
  const devEducation = [data.education.higherDegree, data.education.master];
  const healthEducation = [
    data.education.physiotherapyDegree,
    data.education.physiotherapyMaster,
  ];

  let devOnTop = true;

  const renderCards = (arr) => arr.map((edu) => EducationCard(edu)).join("");

  const template = `
    <section class="education">
      <h2>My Educational Journey</h2>
      <p>From Healthcare to Code</p>
      <div id="education-container" class="education-cards">
        <div id="devSection" class="education-group">
          ${renderCards(devEducation)}
        </div>

        <div id="divider" class="divider" role="button" tabindex="0" aria-pressed="false" aria-label="Toggle education sections order">
          <span>🩺</span>
        </div>

        <div id="healthSection" class="education-group">
          ${renderCards(healthEducation)}
        </div>
      </div>
    </section>
  `;

  setTimeout(() => {
    setupEducationCardEvents();

    const divider = document.getElementById("divider");
    const devSection = document.getElementById("devSection");
    const healthSection = document.getElementById("healthSection");

    const updateDividerText = () => {
      divider.querySelector("span").textContent = devOnTop ? "🩺" : "💻";
      divider.setAttribute("aria-pressed", devOnTop ? "false" : "true");
    };

    const toggleSections = () => {
      // Añadir clase de "encogerse"
      devSection.classList.add("fade-shrink");
      healthSection.classList.add("fade-shrink");

      setTimeout(() => {
        // Intercambiar contenido
        const tempHTML = devSection.innerHTML;
        devSection.innerHTML = healthSection.innerHTML;
        healthSection.innerHTML = tempHTML;

        // Reactivar eventos flip
        setupEducationCardEvents();

        // Cambiar flag y actualizar texto
        devOnTop = !devOnTop;
        updateDividerText();

        // Quitar clase shrink y poner expand
        devSection.classList.remove("fade-shrink");
        healthSection.classList.remove("fade-shrink");

        devSection.classList.add("fade-expand");
        healthSection.classList.add("fade-expand");

        // Quitar clase expand después animación
        setTimeout(() => {
          devSection.classList.remove("fade-expand");
          healthSection.classList.remove("fade-expand");
        }, 400);
      }, 400);
    };

    divider.addEventListener("click", toggleSections);
    divider.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSections();
      }
    });

    updateDividerText();
  }, 0);

  return template;
};
