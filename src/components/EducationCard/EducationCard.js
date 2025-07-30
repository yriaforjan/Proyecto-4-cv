import "./EducationCard.css";

export const EducationCard = (title) => {
  return `
    <div class="card-flip">
      <div class="card-inner">
        <div class="card-front">
          <img src="${title.entity_logo}" alt="${title.entity} logo" class="entity-logo" />
          <h3>${title.name}</h3>
        </div>
        <div class="card-back">
          <p class="entity-name">${title.entity}</p>
          <p class="edu-duration">${title.duration}</p>
        </div>
      </div>
    </div>
  `;
};

export const setupEducationCardEvents = () => {
  const cards = document.querySelectorAll(".card-flip");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
};
