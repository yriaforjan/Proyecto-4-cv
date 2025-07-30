import "./ProjectCard.css";

export const ProjectCard = (project) => `
  <div class="project-card">
    <div class="image-container">
      <img src="${project.image}" alt="${project.title}" />
      <div class="detail">
        <p>${project.description}</p>
      </div>
    </div>
    <div class="header">
      <h3>${project.title}</h3>
      <div class="links">
        <a href="${project.github}" target="_blank" aria-label="GitHub repo for ${project.title}">
          <img src="/icons/github.png" alt="GitHub Icon" />
        </a>
        <a href="${project.link}" target="_blank" aria-label="Live demo for ${project.title}">
          <img src="/icons/link.png" alt="Link icon" />
        </a>
      </div>
    </div>
    <div class="tech">
        ${project.tech.map((tag) => `<span>${tag}</span>`).join(" · ")}
    </div>
  </div>
`;
