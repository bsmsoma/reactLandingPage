import { useTheme } from "../contexts/ThemeContext";

export function Hero() {
  const { theme } = useTheme();
  return (
    <section className={`welcome ${theme}`}>
      <div className={`hero-image ${theme}`}>
      </div>
      <div className={`about-me ${theme}`}>
        <h3>A bit about me</h3>
        <p>
        I have a degree in Database Technology from Senac - Santo Amaro and a strong passion for software development. Currently, I am enhancing my skills in <b>JavaScript, TypeScript, React, Node.js, and SQL</b>, aiming to become a well-rounded full-stack developer.
        </p>
        <p>I have experience building applications that integrate dynamic front-end interfaces, robust APIs, and efficient database management. My focus is on developing scalable, high-performance, and user-friendly solutions while continuously learning and improving my technical expertise.</p>
      </div>
    </section>
  );
}