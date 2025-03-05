import { Link } from "react-router";
import { useTheme } from "../hooks/useTheme";


export function Footer() {
    const {theme} = useTheme();
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className={`footer-border ${theme}`}></div>
            <footer>
                <p>
                    &copy; {currentYear} Brunno Mota. Todos os direitos reservados.
                </p>
            </footer>
        </>
    )
}
