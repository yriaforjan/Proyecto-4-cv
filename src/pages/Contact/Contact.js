import "./Contact.css";
import { data } from "../../data/data";
import { Form } from "../../components/Form/Form";

export const Contact = () => `
    <section class="contact">
        <h2>Reach out</h2>
        <p>Let's connect over career, projects, or anything else - I'm just a click away!</p>
        <div>
            ${Form()}
            <ul id="social">
                ${data.socials.map((social)=> `
                    <li>
                        <a href="${social.address}" target="_blank">
                            <img src="${social.icon}" alt="${social.name} logo" />
                        </a>
                    </li>
                `
                ).join("")}
            </ul>
        </div>
    </section>
`;