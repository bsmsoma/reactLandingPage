import type { Route } from "./+types/projects";
import type { IconType } from "react-icons";
import { useTheme } from "../contexts/ThemeContext";
import {
    SiReact,
    SiFirebase,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiReactrouter,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiSass
} from "react-icons/si";
import rmcImage from "../assets/image/exemplosite.png" //temporario
import joaoVitorImage from "../assets/image/exemplosite2.png" //temporario
import bridalStoreImage from "../assets/image/requintetemp.png" //temporario
import sidneyImage from "../assets/image/sidneytemp.png" //temporario
import { useLanguage } from "../contexts/LanguageContext";

//todo: adicionar imagens dos projetos
interface ProjectCardProps {
    title: {
        name: {
            en: string;
            pt: string;
        };
        url?: string; // URL opcional
    };
    type: {
        en: string;
        pt: string;
    };
    description: {
        en: string;
        pt: string;
    };
    technologies: IconType[];
    techTitle: string[];
    image: string;
    language: string;
}

const ProjectCard = ({ title, type, description, technologies, techTitle, image }: ProjectCardProps) => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    
    return (
        <div className={`project-card ${theme}`}>
            <img src={image} alt={`preview do projeto ${title.name}`} />
            <h3 className="project-title">
                {title.url ? (
                    <a href={title.url} target="_blank" rel="noopener noreferrer">
                        {title.name[language as keyof typeof title.name]}
                    </a>
                ) : (
                    title.name[language as keyof typeof title.name]
                )}
            </h3>
            <h4 className="project-type">{type[language as keyof typeof type]}</h4>
            <p className="project-description">{description[language as keyof typeof description]}</p>
            <div className="tech-stack">
                {technologies.map((Icon, index) => (
                    <span key={index}><i title={techTitle[index]}>{<Icon />}</i></span>
                ))}
            </div>
        </div>
    );
};


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Brunno Mota" },
        { name: "description", content: "Projects" },
        { property: "og:title", content: "Brunno Mota" },
        { property: "og:description", content: "Projects" }

    ];
}

export default function Projects() {

    const { theme } = useTheme();
    const { language } = useLanguage();

    const textTranslations = {
        projects: {
            en: "Projects",
            pt: "Projetos"
        }
    };

    const projectsData = [
        // {
        //     title: {
        //         name: {
        //             en: "Requinte - Formal Wear Rental",
        //             pt: "Requinte - Aluguel de Vestidos de Casamento"
        //         },
        //         url: "https://requinte.netlify.app/"
        //     },
        //     type: {
        //         en: "Virtual Catalog",
        //         pt: "Catálogo Virtual"
        //     },
        //     description: {
        //         en: "Virtual catalog for formal wear rental. Aiming to enhance the customer experience in searching for formal wear, a virtual catalog was developed with a modern and responsive design.",
        //         pt: "Catálogo virtual para aluguel de vestidos de casamento. Buscando melhorar a experiência do cliente na busca por vestidos de casamento, foi desenvolvido um catálogo virtual com um design moderno e responsivo."
        //     },
        //     technologies: [SiReact, SiSass, SiFirebase, SiReactrouter],
        //     techTitle: ["React", "Sass", "Firebase", "React Router"],
        //     image: bridalStoreImage
        // },
        {
            title: {
                name: {
                    en: "RMC Machines",
                    pt: "RMC Máquinas"
                },
                url: "https://rafaelmaquinas.netlify.app/"
            },
            type: {
                en: "Corporate Website",
                pt: "Site Corporativo"
            },
            description: {
                en: "SEO-optimized corporate website, developed with a focus on conversion to attract both local and regional customers.",
                pt: "Site corporativo otimizado para SEO, desenvolvido com foco em conversão para atrair clientes locais e regionais."
            },
            technologies: [SiHtml5, SiCss3, SiJavascript],
            techTitle: ["HTML", "CSS", "Javascript"],
            image: rmcImage
        },
        {
            title: {
                name: {
                    en: "João Vitor - Photography",
                    pt: "João Vitor - Fotografia"
                },
                url: "https://joaovitorfotografo.netlify.app/"
            },
            type: {
                en: "Landing Page",
                pt: "Landing Page"
            },
            description: {
                en: "Landing page developed to showcase a photographer's portfolio, featuring a modern, responsive design focused on optimal user experience.",
                pt: "Landing page desenvolvida para mostrar o portfólio de um fotógrafo, com um design moderno e responsivo focado na experiência de usuário ideal."
            },
            technologies: [SiReact, SiTypescript, SiTailwindcss, SiReactrouter],
            techTitle: ["React", "Typescript", "Tailwindcss", "React Router V7"],
            image: joaoVitorImage
        },
        {
            title: {
                name: {
                    en: "Sidney Resende",
                    pt: "Sidney Resende"
                },
                url: "https://sidneyresende.netlify.app/"
            },
            type: {
                en: "Landing Page",
                pt: "Landing Page"
            },
            description: {
                en: "Landing page optimized for Google Ads and SEO, developed for a law firm. Focused on increasing lead conversion and improving positioning in paid and organic searches.",
                pt: "Landing page otimizada para Google Ads e SEO, desenvolvida para uma empresa de advocacia. Focado em aumentar a conversão de leads e melhorar a posição em buscas pagas e orgânicas."
            },
            technologies: [SiHtml5, SiCss3, SiJavascript],
            techTitle: ["HTML", "CSS", "Javascript"],
            image: sidneyImage
        }
        // Add more projects GOGOGO!
    ];

    return (
        <section className={`projects-container ${theme}`}>
            <h1>{textTranslations.projects[language as keyof typeof textTranslations.projects]}</h1>
            <div className="bento-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} language={language} />
                ))}
            </div>
        </section>
    );
}
