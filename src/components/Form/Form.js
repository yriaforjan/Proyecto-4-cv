import "./Form.css";
import { Button } from "../Button/Button";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY);

export const Form = () => {
    const template = `
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name..." required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email..." required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>

            ${Button("Send", "/icons/send.png")}
        </form>
    `;

    setTimeout(() => {
        const contactForm = document.getElementById("contactForm");
        
        if (contactForm) {
          contactForm.addEventListener("submit", async (event)=>{
            event.preventDefault();
            
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
           
            const submitButton = contactForm.querySelector("button");
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = "Sending...";
            submitButton.disabled = true;

            try{
                const res = await emailjs.sendForm(serviceID, templateID, contactForm);
                console.log("Email sent successfully:", res.text);
                contactForm.reset();
                alert("Message sent successfully!");
            } catch(error){
                console.error("Error sending email:", error.text);
                alert("Failed to send message. Please try again later.");
            } finally{
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
              }
          });
        }
      },0);

    return template;
}