import "./Button.css";

export const Button = (text, icon = null) => `
    <button class="myBtn ${icon ? "withIcon ": "withoutIcon"}">
        ${icon ? `<img src="${icon}" alt="${text} icon"/>` : ""}
        <h4>${text}</h4>
    </button>
`;