import logo from "../../images/logo.svg";
import Navigation from "./Navigation";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const location = useLocation();

  const hiddenOnRoutes = ["/", "/movies", "/saved-movies", "/profile"];

  if (!hiddenOnRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <header
      className={location.pathname === "/" ? "header header_purple" : "header"}
    >
      <NavLink to="/" className="header__logo link">
        <img src={logo} alt="movies логотип" className="header__logo-img"></img>
      </NavLink>
      <Navigation
        isBurgerMenuOpen={props.isBurgerMenuOpen}
        loggedIn={props.loggedIn}
        onExit={props.onExit}
        onBurgerClick={props.onBurgerClick}
      />
    </header>
  );
}
