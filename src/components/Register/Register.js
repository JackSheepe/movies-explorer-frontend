import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register(props) {
  props.useDocumentTitle("Регистрация");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                  !isValid ? "sign-in-up__form-input_error" : ""
                }}`}
                type="name"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                minlength="2"
                maxlength="30"
              />
            </div>
            <div className="sign-in-up__form-input-container">
              <label htmlFor="name" className="sign-in-up__form-input-label">
                E-mail
              </label>
              <input
                className={`sign-in-up__form-input ${
                  !isValid ? "sign-in-up__form-input_error" : ""
                }}`}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="sign-in-up__form-input-container">
              <label htmlFor="name" className="sign-in-up__form-input-label">
                Пароль
              </label>
              <input
                className={`sign-in-up__form-input ${
                  !isValid ? "sign-in-up__form-input_error" : ""
                }}`}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                minlength="8"
                maxlength="30"
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
            Что-то пошло не так...
          </span>
          <button className="sign-in-up__form-submit btn" type="submit">
            Зарегестрироваться
          </button>
        </form>
        <Link to="/signin" className="sign-in-up__login-link link">
          Уже зарегестрированы?{" "}
          <span className="sign-in-up__login-link-sign link">Войти</span>
        </Link>
      </section>
    </main>
  );
}

export default Register;
