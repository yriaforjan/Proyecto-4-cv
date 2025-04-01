import "./Education.css";
import { EducationAccordion } from "../../components/EducationAccordion/EducationAccordion";
import { data } from "../../data/data";

export const Education = () => {
    const template = `
        <section class="education">
            <h2>My Educational Journey</h2>
            <p>From Healthcare to Code</p>
            <div>
            ${Object.values(data.education).map((title) =>
                EducationAccordion(title)
            ).join("")}
            </div>
        </section>
    `;

    setTimeout(()=>{
        const accordionBtns = document.querySelectorAll(".accordionBtn");
        
        for(const btn of accordionBtns){
            const div = btn.closest(".education-accordion");
            const detail = div.querySelector(".detail");

            if(btn && detail){
                btn.addEventListener("click", () => {
                    div.classList.toggle("open");
                    
                    const isOpen = div.classList.contains("open");
                    btn.textContent = isOpen ? "–" : '▾'; 
                    detail.style.display = isOpen ? 'flex' : 'none';

                    if(isOpen){
                        detail.scrollIntoView({behavior: "smooth", block: "center"});
                    }
                });
            }
        }
    }, 0)

    return template;
};
    