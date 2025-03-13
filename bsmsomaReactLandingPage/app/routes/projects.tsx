import type { Route } from "./+types/projects";
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

//todo: adicionar imagens dos projetos

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    technologies: JSX.Element[];
    link: string;
    image: string;
}

const ProjectCard = ({ title, type, description, technologies, link, image }: ProjectCardProps) => {
    const { theme } = useTheme();
    
    return (
        <div className={`project-card ${theme}`}>
            <img src={image} alt={`preview do projeto ${title}`} />
            <h3>{title}</h3>
            <h4>{type}</h4>
            <p>{description}</p>
            <div className="tech-stack">
                {technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
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
            title: "Requinte - Locação de Trajes",
            type: "Catalogo Virtual",
            description: "Catalogo virtual de trajes para locação, desenvolvido com React, React Router, Sass, Firebase",
            technologies: [<SiReact />, <SiSass />, <SiFirebase />, <SiReactrouter />],
            link: "https://github.com/seu-usuario/projeto1",
        },
        {
            title: "RMC Maquinas",
            type: "Institucional",
            description: "Site institucional otimizado para SEO, desenvolvido com foco em conversão para atrair clientes locais e de outras regiões.",
            technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
            link: "https://github.com/seu-usuario/projeto1",
            image: rmcImage
        },
        {
            title: "João Vitor - Fotografia",
            type: "Landing Page",
            description: "Loja virtual com integração ao Firebase",
            technologies: [<SiReact />, <SiTailwindcss />, <SiReactrouter />],
            link: "https://github.com/seu-usuario/projeto2",
            image: joaoVitorImage
        },
        // Adicione mais projetos conforme necessário
    ];

    return (
        <section className={`projects-container ${theme}`}>
            <h1>Projetos</h1>
            <div className="bento-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
