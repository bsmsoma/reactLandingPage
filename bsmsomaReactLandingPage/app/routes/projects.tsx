import type { Route } from "./+types/projects";
import { useTheme } from "../contexts/ThemeContext";
import { 
    SiReact, 
    SiFirebase, 
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiReactrouter 
} from "react-icons/si";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: JSX.Element[];
    link: string;
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
    const { theme } = useTheme();
    
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" 
           className={`project-card ${theme}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-stack">
                {technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </a>
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
            title: "Landing Page",
            description: "Portfolio pessoal desenvolvido com React e TypeScript",
            technologies: [<SiReact />, <SiTypescript />, <SiTailwindcss />],
            link: "https://github.com/seu-usuario/projeto1"
        },
        {
            title: "E-commerce",
            description: "Loja virtual com integração ao Firebase",
            technologies: [<SiReact />, <SiFirebase />, <SiReactrouter />],
            link: "https://github.com/seu-usuario/projeto2"
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
