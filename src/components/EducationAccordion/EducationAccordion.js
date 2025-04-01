import "./EducationAccordion.css";

export const EducationAccordion = (title) => `
    <div class="education-accordion">
        <div class="header">
            <img src="${title.entity_logo}" alt="${title.entity} logo"/>
            <h3>${title.name}</h3>
            <button class="accordionBtn">▾</button>
        </div>
        <div class="detail" style="display:none">
            <p>${title.entity}</p>
            <p>${title.duration}</p>
        </div>
    </div>
`;