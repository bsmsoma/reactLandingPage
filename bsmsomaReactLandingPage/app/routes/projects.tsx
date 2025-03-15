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
                name: "Requinte - Formal Wear Rental",
                url: "https://requinte.netlify.app/" 
            },
            type: "Virtual Catalog",
            description: "Virtual catalog for formal wear rental. Aiming to enhance the customer experience in searching for formal wear, a virtual catalog was developed with a modern and responsive design.",
            technologies: [SiReact, SiSass, SiFirebase, SiReactrouter],
            techTitle: ["React", "Sass", "Firebase", "React Router"],
            image: bridalStoreImage
        },
        {
            title: {
                name: "RMC Machines",
                url: "https://rafaelmaquinas.netlify.app/"
            },
            type: "Corporate Website",
            description: "SEO-optimized corporate website, developed with a focus on conversion to attract both local and regional customers.",
            technologies: [SiHtml5, SiCss3, SiJavascript],
            techTitle: ["HTML", "CSS", "Javascript"],
            image: rmcImage
        },
        {
            title: {
                name: "João Vitor - Photography",
                url: "https://projetofotocriativa.netlify.app/"
            },
            type: "Landing Page",
            description: "Landing page developed to showcase a photographer's portfolio, featuring a modern, responsive design focused on optimal user experience.",
            technologies: [SiReact, SiTypescript, SiTailwindcss, SiReactrouter],
            techTitle: ["React", "Typescript", "Tailwindcss", "React Router V7"],
            image: joaoVitorImage
        },
        {
            title: {
                name: "Sidney Resende",
                url: "https://sidneyresende.netlify.app/"
            },
            type: "Landing Page",
            description: "Landing page optimized for Google Ads and SEO, developed for a law firm. Focused on increasing lead conversion and improving positioning in paid and organic searches.",
            technologies: [SiHtml5, SiCss3, SiJavascript],
            techTitle: ["HTML", "CSS", "Javascript"],
            image: sidneyImage
        }
        // Add more projects GOGOGO!
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
