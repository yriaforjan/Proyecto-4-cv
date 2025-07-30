import "./Button.css";

export const Button = (text, icon = null, isHome = false) => `
  <button class="myBtn ${icon ? "withIcon " : "withoutIcon"} ${isHome ? "fade-down" : ""}">
    ${icon ? `<img src="${icon}" alt="${text} icon"/>` : ""}
    <h4>${text}</h4>
  </button>
`;
