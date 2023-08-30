import "./NavTab.css";

export default function NavTab() {
  return (
    <nav className="hero__nav">
      <a href="#about" className="hero__nav-link link">
        О проекте
      </a>
      <a href="#tech" className="hero__nav-link link">
        Технологии
      </a>
      <a href="#student" className="hero__nav-link link">
        Студент
      </a>
    </nav>
  );
}
