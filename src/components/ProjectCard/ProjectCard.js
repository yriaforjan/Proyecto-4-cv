import "./ProjectCard.css";

export const ProjectCard = (project) => `
    <div class="project-card">
        <img src=${project.image} alt=${project.title}/>
        <div class="header">
            <h3>${project.title}</h3>
            <div>
                <a href=${project.github} target="_blank">
                    <img src="/icons/github.png" alt="GitHub Icon" />
                </a>
                <a href=${project.link} target="_blank">
                    <img src="/icons/link.png" alt="Link icon" />
                </a>
            </div>
        </div>
        <div class="detail">
            <p>${project.description}</p>
        </div>
    </div>
`;