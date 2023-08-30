import React from "react";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import acc_gray from "../../images/profile-gray.svg";

export default function BurgerMenu(props) {
  function handleBackClick() {
    props.onBurgerClick();
  }

  return (
    props.isBurgerMenuOpen && (
      <div className="burger-menu">
        <div className="burger-menu__back" onClick={handleBackClick}></div>
        <nav
          className="header__menu header__menu_burger"
          onClick={handleBackClick}
        >
          <button className="burger-menu__close btn"></button>
          <NavLink
            className={({ isActive }) =>
              `header__menu-link header__menu-link_burger header__menu-link_movies link ${
                isActive ? "header__menu-link_active" : ""
              }`
            }
            to={"/"}
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `header__menu-link header__menu-link_burger header__menu-link_movies link ${
                isActive ? "header__menu-link_active" : ""
              }`
            }
            to={"movies"}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `header__menu-link header__menu-link_burger header__menu-link_movies link ${
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
              class="header__acc-icon"
              src={acc_gray}
              alt="иконка аккаунта"
            ></img>
          </NavLink>
        </nav>
      </div>
    )
  );
}
