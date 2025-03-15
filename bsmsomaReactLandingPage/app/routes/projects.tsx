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

//todo: adicionar imagens dos projetos

interface ProjectCardProps {
    title: {
        name: string;
        url?: string; // URL opcional
    };
    type: string;
    description: string;
    technologies: IconType[];
    techTitle: string[];
    image: string;
}

const ProjectCard = ({ title, type, description, technologies, techTitle, image }: ProjectCardProps) => {
    const { theme } = useTheme();
    
    return (
        <div className={`project-card ${theme}`}>
            <img src={image} alt={`preview do projeto ${title.name}`} />
            <h3 className="project-title">
                {title.url ? (
                    <a href={title.url} target="_blank" rel="noopener noreferrer">
                        {title.name}
                    </a>
                ) : (
                    title.name
                )}
            </h3>
            <h4 className="project-type">{type}</h4>
            <p className="project-description">{description}</p>
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
    
    const projectsData = [
        {
            title: {
                name: "Requinte - Locação de Trajes",
                url: "https://requinte.netlify.app/" 
            },
            type: "Catalogo Virtual",
            description: "Catalogo virtual de trajes para locação, Visando melhorar a experiencia do cliente na busca por um traje, foi desenvolvido um catalogo virtual com um design moderno e responsivo.",
            technologies: [SiReact, SiSass, SiFirebase, SiReactrouter],
            techTitle: ["React", "Sass", "Firebase", "React Router"],
            image: bridalStoreImage
        },
        {
            title: {
                name: "RMC Maquinas",
                url: "https://rafaelmaquinas.netlify.app/"
            },
            type: "Institucional",
            description: "Site institucional otimizado para SEO, desenvolvido com foco em conversão para atrair clientes locais e de outras regiões.",
            technologies: [SiHtml5, SiCss3, SiJavascript],
            techTitle: ["HTML", "CSS", "Javascript"],
            image: rmcImage
        },
        {
            title: {
                name: "João Vitor - Fotografia",
                url: "https://projetofotocriativa.netlify.app/"
            },
            type: "Landing Page",
            description: "Landing page desenvolvida para destacar o portfólio de um fotógrafo, com um design moderno, responsivo e focado na melhor experiência do usuário",
            technologies: [SiReact, SiTypescript, SiTailwindcss, SiReactrouter],
            techTitle: ["React", "Typescript", "Tailwindcss", "React Router V7"],
            image: joaoVitorImage
        },
        // Adicionar mais projetos GOGOGO!
    ];

    return (
        <section className={`projects-container ${theme}`}>
            <h1>Projects</h1>
            <div className="bento-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
