import { useState } from "react";
import { NavLink } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { FaBars } from "react-icons/fa";
import { Space, Switch } from 'antd';

export function Navbar() {

  // useTheme é um hook que retorna o tema atual e a função para alternar o tema
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // resourses é um objeto que contém os ícones para o tema claro e o tema escuro
  const resourses = {
    light: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V3" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 21V22" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 12L21 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12L2 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.0708 4.92969L18.678 5.32252" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.32178 18.6777L4.92894 19.0706" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.0708 19.0703L18.678 18.6775" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.32178 5.32227L4.92894 4.92943" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    dark: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z" fill="white" />
    </svg>
  }

  const textTranslations = {
    subtitle: {
      en: "Developer",
      pt: "Desenvolvedor",
    },
    home: {
      en: "Home",
      pt: "Início",
    },
    contact: {
      en: "Contact",
      pt: "Contato",
    },
    projects: {
      en: "Projects",
      pt: "Projetos",
    },
  }
  return (
    <nav className={`navbar ${theme}`}>
      <div className={`titles ${theme}`}>
        <h1>Brunno Mota</h1>
        <h3>{textTranslations.subtitle[language as keyof typeof textTranslations.subtitle]}</h3>
      </div>
      <ul className={`navbarlinks ${theme}`}>
        <Space direction="vertical">
          <Switch
            checkedChildren={language.toUpperCase()}
            unCheckedChildren={language.toUpperCase()}
            size="small"
            onChange={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          />
        </Space>
        <li>
          <NavLink className={({ isActive }) => isActive ? `active ${theme}` : ''} to="/">
            {textTranslations.home[language as keyof typeof textTranslations.home]}
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? `active ${theme}` : ''} to="/contact">
            {textTranslations.contact[language as keyof typeof textTranslations.contact]}
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? `active ${theme}` : ''} to="/projects">
            {textTranslations.projects[language as keyof typeof textTranslations.projects]}
          </NavLink>
        </li>
        {/* <li>
            <NavLink className={({isActive}) => isActive ? `active ${theme}` : ''} to="/blog">Blog</NavLink>
          </li> */}
        <li>
          <button className={`theme-button ${theme}`} onClick={toggleTheme}>{theme === 'dark' ? resourses.dark : resourses.light}</button>
        </li>
      </ul>
      <div className="mobile-menu-container">
        <Space direction="vertical" className="languageswitch">
          <Switch
            className={`language-switch ${theme}`}
            checkedChildren={language.toUpperCase()}
            unCheckedChildren={language.toUpperCase()}
            defaultChecked
            size="small"
            onChange={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          />
        </Space>
        <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>
      </div>
      {isMenuOpen && (
        <div className={`mobile-menu-content ${theme}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                {textTranslations.home[language as keyof typeof textTranslations.home]}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                {textTranslations.contact[language as keyof typeof textTranslations.contact]}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                {textTranslations.projects[language as keyof typeof textTranslations.projects]}
              </NavLink>
            </li>
            <li>
              <button className={`theme-button ${theme}`} onClick={toggleTheme}>{theme === 'dark' ? resourses.dark : resourses.light}</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


