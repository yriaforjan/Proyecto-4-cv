import "./Projects.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { data } from "../../data/data";


export const Projects = () => `
    <section class="projects">
        <h2>My Projects Showcase</h2>
        <p>Experimenting, Building, Evolving</p>
        <div>
            ${data.projects.map((project) => 
                ProjectCard(project)
            ).join("")}
        </div>
    </section>
`;