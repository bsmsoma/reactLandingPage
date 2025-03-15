import { Link } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";  

export function Footer() {
    const {theme} = useTheme();
    const currentYear = new Date().getFullYear();
    return (
            <footer className={`footer ${theme}`}>
                <p>
                    &copy; {currentYear} Brunno Mota. Todos os direitos reservados.
                </p>
                <div className={`icons ${theme}`}>
                    <IconContext.Provider value={{ size: "1.5rem", color: theme === "dark" ? "white" : "#000" }}>
                    <Link to="https://www.linkedin.com/in/brunno-mota-bb0184269/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </Link>
                    <Link to="https://github.com/bsmsoma" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Link>
                    <Link to="https://www.instagram.com/brunno_mota/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </Link>
                    <Link to="https://wa.me/5563992565050" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </Link>
                    </IconContext.Provider>
                </div>
            </footer>  
    )
}
