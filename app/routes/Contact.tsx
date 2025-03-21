import type { Route } from "./+types/Contact";
import { useTheme } from "../contexts/ThemeContext";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "~/contexts/LanguageContext";

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
    const { language } = useLanguage();
    const textTranslations = {
        contact: {
            en: "Let's Connect!",
            pt: "Vamos Conectar!",
        },
        whatsapp: {
            en: "Let's chat! Available Mon-Fri",
            pt: "Vamos conversar! Disponível de Seg-Sex",
        },
        email: {
            en: "Professional inquiries welcome",
            pt: "Propostas de trabalho são bem-vindas",
        },
        phone: {
            en: "Direct contact",
            pt: "Contato direto",
        },
        contactIntro: {
            en: "I'm always excited to collaborate on new projects and discuss innovative ideas. Feel free to reach out through any of these channels:",
            pt: "Estou sempre animado para colaborar em novos projetos e discutir ideias inovadoras. Sinta-se à vontade para entrar em contato através de qualquer um desses canais:",
        },
        emailIntro: {
            en: "Professional inquiries welcome",
            pt: "Propostas de trabalho são bem-vindas",
        },
        phoneIntro: {
            en: "Direct contact",
            pt: "Contato direto",
        },
    };
    
    return (
        <div className={`contact-container ${theme}`}>
            <h1>{textTranslations.contact[language as keyof typeof textTranslations.contact]}</h1>
            <p className="contact-intro">
                {textTranslations.contactIntro[language as keyof typeof textTranslations.contactIntro]}
            </p>
            
            <div className="contact-cards">
                <div className={`contact-card ${theme}`}>
                    <FaWhatsapp className="icon" />
                    <h3>WhatsApp</h3>
                    <p>{textTranslations.whatsapp[language as keyof typeof textTranslations.whatsapp]}</p>
                    <a href="https://wa.me/5563992565050" className="contact-link">
                        +55 (63) 99256-5050
                    </a>
                </div>

                <div className={`contact-card ${theme}`}>
                    <FaEnvelope className="icon" />
                    <h3>Email</h3>
                    <p>{textTranslations.email[language as keyof typeof textTranslations.email]}</p>
                    <a href="mailto:bsmsoma@gmail.com" className="contact-link">
                        bsmsoma@gmail.com
                    </a>
                </div>

                <div className={`contact-card ${theme}`}>
                    <FaPhone className="icon" />
                    <h3>Phone</h3>
                    <p>{textTranslations.phone[language as keyof typeof textTranslations.phone]}</p>
                    <a href="tel:+5563992565050" className="contact-link">
                        +55 (63) 99256-5050
                    </a>
                </div>
            </div>
        </div>
    )
}