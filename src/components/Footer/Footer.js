import { useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  const hiddenOnRoutes = ["/", "/movies", "/saved-movies"];

  if (!hiddenOnRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer">
      <p className="footer__project">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__links">
        <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        <ul className="footer__links-container">
          <li className="footer__link-container">
            <a
              className="footer__link link"
              href="https://practicum.yandex.ru/"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-container">
            <a
              className="footer__link link"
              href="https://github.com/JackSheepe"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
