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
        <nav className="burger-menu__nav" onClick={handleBackClick}>
          <button className="burger-menu__close btn" type="button"></button>
          <NavLink
            className={({ isActive }) =>
              `burger-menu__nav-link link ${
                isActive ? "burger-menu__nav-link_active" : ""
              }`
            }
            to={"/"}
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `burger-menu__nav-link link ${
                isActive ? "burger-menu__nav-link_active" : ""
              }`
            }
            to={"movies"}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `burger-menu__nav-link link ${
                isActive ? "burger-menu__nav-link_active" : ""
              }`
            }
            to={"/saved-movies"}
          >
            Сохранённые Фильмы
          </NavLink>
          <NavLink
            className="burger-menu__nav-link burger-menu__nav-link_acc"
            to={"/profile"}
          >
            Аккаунт
            <img
              className="burger-menu__acc-icon"
              src={acc_gray}
              alt="иконка аккаунта"
            ></img>
          </NavLink>
        </nav>
      </div>
    )
  );
}
