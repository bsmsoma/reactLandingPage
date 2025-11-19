import type { Route } from "./+types/home";
import { useTheme } from "../contexts/ThemeContext";
import { Spin } from "antd";
import { useLanguage } from "~/contexts/LanguageContext";

export function meta({ }: Route.MetaArgs) {
    const baseUrl = "https://brunnomota.com.br";
    const imageUrl = `${baseUrl}/assets/image/optimized/profile-optimized.jpg`;
    
    return [
        { title: "Brunno Mota - Desenvolvedor Full Stack" },
        { name: "description", content: "Desenvolvedor Full Stack especializado em JavaScript, TypeScript, React, Node.js e SQL. Portfólio profissional com projetos de desenvolvimento web, sites corporativos e landing pages." },
        { name: "keywords", content: "desenvolvedor full stack, JavaScript, TypeScript, React, Node.js, SQL, desenvolvimento web, portfolio, programador, frontend, backend" },
        { name: "author", content: "Brunno Mota" },
        { name: "robots", content: "index, follow" },
        // Open Graph / Facebook
        { property: "og:site_name", content: "Brunno Mota - Portfolio" },
        { property: "og:title", content: "Brunno Mota - Desenvolvedor Full Stack" },
        { property: "og:description", content: "Desenvolvedor Full Stack especializado em JavaScript, TypeScript, React, Node.js e SQL. Portfólio profissional com projetos de desenvolvimento web." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: baseUrl },
        { property: "og:image", content: imageUrl },
        { property: "og:image:secure_url", content: imageUrl },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Brunno Mota - Desenvolvedor Full Stack" },
        // Cache e Performance
        { name: "cache-control", content: "public, max-age=31536000" },
        { name: "expires", content: "31536000" },
        // WhatsApp específico
        { property: "og:image:width", content: "300" },
        { property: "og:image:height", content: "300" }
    ];
}

export default function Hero() {

    const { theme } = useTheme();
    const { language } = useLanguage();
    
    const textTranslations = {
        aboutMe: {
            en: "A bit about me",
            pt: "Um pouco sobre mim",
        },
        aboutMeFirstParagraph: {
            en: "Graduated in Database Technology from Senac – Santo Amaro and currently studying Software Engineering at Ulbra, I continue evolving with a focus on modern, scalable, and future-oriented software development.",
            pt: "Formado em Tecnologia de Banco de Dados pelo Senac – Santo Amaro e atualmente cursando Engenharia de Software na Ulbra, sigo evoluindo com foco no desenvolvimento de software moderno, escalável e orientado ao futuro.",
        },
        aboutMeSecondParagraph: {
            en: "I have been deepening my knowledge in JavaScript, TypeScript, and Node.js, developing complete applications that integrate dynamic interfaces with well-structured APIs. In recent months, I have also been studying and applying Artificial Intelligence — especially in the use of APIs and language models — to create smarter, automated, and more efficient solutions.",
            pt: "Tenho me aprofundado em JavaScript, TypeScript e Node.js, desenvolvendo aplicações completas que integram interfaces dinâmicas com APIs bem estruturadas. Nos últimos meses, também venho estudando e aplicando Inteligência Artificial — especialmente no uso de APIs e modelos de linguagem — para criar soluções mais inteligentes, automatizadas e eficientes.",
        },
        aboutMeThirdParagraph: {
            en: "My goal is to establish myself as a full-stack developer with strong TypeScript expertise and the ability to apply AI in practice, building high-performance, user-friendly systems prepared for sustainable growth.",
            pt: "Meu objetivo é me consolidar como um desenvolvedor full-stack com forte domínio em TypeScript e com capacidade de aplicar IA na prática, construindo sistemas de alto desempenho, fáceis de usar e preparados para crescer de forma sustentável.",
        },
    };
    return (
        <section className={`welcome ${theme}`}>
            <div className={`hero-image ${theme}`}>
            </div>
            <div className={`about-me ${theme}`}>
                <h3>{textTranslations.aboutMe[language as keyof typeof textTranslations.aboutMe]}</h3>
                <p>
                    {textTranslations.aboutMeFirstParagraph[language as keyof typeof textTranslations.aboutMeFirstParagraph]}
                </p>
                <p>
                    {textTranslations.aboutMeSecondParagraph[language as keyof typeof textTranslations.aboutMeSecondParagraph]}
                </p>
                <p>
                    {textTranslations.aboutMeThirdParagraph[language as keyof typeof textTranslations.aboutMeThirdParagraph]}
                </p>
            </div>
        </section>
    );
}
