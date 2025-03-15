import type { Route } from "./+types/Contact";
import { useTheme } from "../contexts/ThemeContext";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Brunno Mota" },
        { name: "description", content: "Contact with the developer" },
        { property: "og:title", content: "Brunno Mota" },
        { property: "og:description", content: "Contact with the developer" }
    ]
}

export default function Contact() {
    const { theme } = useTheme();
    
    return (
        <div className={`contact-container ${theme}`}>
            <h1>Let's Connect!</h1>
            <p className="contact-intro">
                I'm always excited to collaborate on new projects and discuss innovative ideas. 
                Feel free to reach out through any of these channels:
            </p>
            
            <div className="contact-cards">
                <div className={`contact-card ${theme}`}>
                    <FaWhatsapp className="icon" />
                    <h3>WhatsApp</h3>
                    <p>Let's chat! Available Mon-Fri</p>
                    <a href="https://wa.me/5563992565050" className="contact-link">
                        +55 (63) 99256-5050
                    </a>
                </div>

                <div className={`contact-card ${theme}`}>
                    <FaEnvelope className="icon" />
                    <h3>Email</h3>
                    <p>Professional inquiries welcome</p>
                    <a href="mailto:bsmsoma@gmail.com" className="contact-link">
                        bsmsoma@gmail.com
                    </a>
                </div>

                <div className={`contact-card ${theme}`}>
                    <FaPhone className="icon" />
                    <h3>Phone</h3>
                    <p>Direct contact</p>
                    <a href="tel:+5563992565050" className="contact-link">
                        +55 (63) 99256-5050
                    </a>
                </div>
            </div>
        </div>
    )
}