import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import acc from "../../images/profile.svg";
import acc_gray from "../../images/profile-gray.svg";

function Navigation(props) {
  const location = useLocation();

  function handleBurgerClick() {
    props.onBurgerClick();
  }

  return (
    <nav className="header__menu">
      {props.loggedIn ? (
        <React.Fragment>
          {!props.isBurgerMenuOpen && (
            <button
              className="header__menu-burger btn"
              onClick={handleBurgerClick}
              type="button"
            ></button>
          )}
          <NavLink
            className={({ isActive }) =>
              `header__menu-link header__menu-link_movies link ${
                isActive ? "header__menu-link_active" : ""
              }`
            }
            to={"movies"}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `header__menu-link header__menu-link_movies link ${
                isActive ? "header__menu-link_active" : ""
              }`
            }
            to={"/saved-movies"}
          >
            Сохранённые Фильмы
          </NavLink>
          <NavLink
            className="header__menu-link link header__menu-link_with-icon"
            to={"/profile"}
          >
            Аккаунт
            <img
              className="header__acc-icon"
              src={location.pathname === "/" ? acc : acc_gray}
              alt="иконка аккаунта"
            ></img>
          </NavLink>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink
            className="header__menu-link link header__menu-link_shown"
            to={"/signup"}
          >
            Регистрация
          </NavLink>
          <NavLink
            className="header__menu-link link header__menu-link_shown header__menu-link_login"
            to={"/signin"}
          >
            Войти
          </NavLink>
        </React.Fragment>
      )}
    </nav>
  );
}

export default Navigation;
