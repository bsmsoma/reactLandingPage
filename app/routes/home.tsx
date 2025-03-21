import type { Route } from "./+types/home";
import { useTheme } from "../contexts/ThemeContext";
import { Spin } from "antd";
import { useLanguage } from "~/contexts/LanguageContext";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Brunno Mota" },
        { name: "description", content: "Brunno Mota" },
        { property: "og:title", content: "Brunno Mota" },
        { property: "og:description", content: "Portfolio profissional" }
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
        aboutMeIntro: {
            en: (<>I have a degree in Database Technology from Senac - Santo Amaro and a strong passion for software development. Currently, I am enhancing my skills in <b>JavaScript, TypeScript, React, Node.js, and SQL</b>, aiming to become a well-rounded full-stack developer. </>),
            pt: (<>Formado em Tecnologia de Banco de Dados do Senac - Santo Amaro e com uma paixão forte pelo desenvolvimento de software. Atualmente, estou aprimorando minhas habilidades em <b>JavaScript, TypeScript, React, Node.js, e SQL</b>, visando me tornar um desenvolvedor full-stack completo.</>),
        },
        aboutmeSecondParagraph: {
            en: "I have experience building applications that integrate dynamic front-end interfaces, robust APIs, and efficient database management. My focus is on developing scalable, high-performance, and user-friendly solutions while continuously learning and improving my technical expertise.",
            pt: "Tenho experiência em construir aplicativos que integram interfaces front-end dinâmicas, APIs robustas e gerenciamento de banco de dados eficiente. Meu foco é desenvolver soluções escaláveis, de alto desempenho e de fácil uso, enquanto continuo aprendendo e aprimorando minha expertise técnica.",
        },
    };
    return (
        <section className={`welcome ${theme}`}>
            <div className={`hero-image ${theme}`}>
            </div>
            <div className={`about-me ${theme}`}>
                <h3>{textTranslations.aboutMe[language as keyof typeof textTranslations.aboutMe]}</h3>
                <p>
                    {textTranslations.aboutMeIntro[language as keyof typeof textTranslations.aboutMeIntro]}
                </p>
                <p>
                    {textTranslations.aboutmeSecondParagraph[language as keyof typeof textTranslations.aboutmeSecondParagraph]}
                </p>
            </div>
        </section>
    );
}
