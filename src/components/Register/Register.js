import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Register(props) {
  props.useDocumentTitle("Регистрация");
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onRegister(values.name, values.email, values.password);
  };

  return (
    <main>
      <section className="sign-in-up">
        <NavLink to="/" className="sign-in-up__logo link">
          <img src={logo} alt="movies логотип"></img>
        </NavLink>
        <h1 className="sign-in-up__heading">Добро пожаловать!</h1>
        <form className="sign-in-up__form" onSubmit={handleSubmit}>
          <div className="sign-in-up__form-inputs">
            <div className="sign-in-up__form-input-container">
              <label htmlFor="name" className="sign-in-up__form-input-label">
                Имя
              </label>
              <input
                className={`sign-in-up__form-input ${
                  errors.name ? "sign-in-up__form-input_error" : ""
                }`}
                type="text"
                name="name"
                id="name"
                value={values.name || ""}
                onChange={handleChange}
                placeholder="Имя"
                required
                minLength="2"
                maxLength="30"
              />
            </div>
            <div className="sign-in-up__form-input-container">
              <label htmlFor="email" className="sign-in-up__form-input-label">
                E-mail
              </label>
              <input
                className={`sign-in-up__form-input ${
                  errors.email ? "sign-in-up__form-input_error" : ""
                }`}
                type="email"
                name="email"
                id="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="E-mail"
                pattern="[^@!#$%&*;:'`~+=\|\?\/\{\}\^\s]+@[^@\s]+\.[^@\s]+"
                required
              />
            </div>
            <div className="sign-in-up__form-input-container">
              <label
                htmlFor="password"
                className="sign-in-up__form-input-label"
              >
                Пароль
              </label>
              <input
                className={`sign-in-up__form-input ${
                  errors.password ? "sign-in-up__form-input_error" : ""
                }`}
                type="password"
                name="password"
                id="password"
                value={values.password || ""}
                onChange={handleChange}
                placeholder="Пароль"
                required
                minLength="8"
                maxLength="30"
              />
            </div>
          </div>
          <span
            className={
              !isValid
                ? "sign-in-up__error-text sign-in-up__error-text_active"
                : "sign-in-up__error-text"
            }
          >
            {errors.name} {errors.email} {errors.password}{" "}
          </span>
          <button
            className={`sign-in-up__form-submit btn ${
              !isValid ? "sign-in-up__form-submit_error" : ""
            }`}
            type="submit"
          >
            Зарегестрироваться
          </button>
        </form>
        <Link to="/signin" className="sign-in-up__login-link link">
          Уже зарегестрированы?{" "}
          <span className="sign-in-up__login-link-part">Войти</span>
        </Link>
      </section>
    </main>
  );
}

export default Register;
