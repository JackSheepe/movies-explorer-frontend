import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login(props) {
  props.useDocumentTitle("Войти");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <section className="sign-in-up">
        <NavLink to="/" className="sign-in-up__logo link">
          <img src={logo} alt="movies логотип"></img>
        </NavLink>
        <h1 className="sign-in-up__heading">Рады видеть!</h1>
        <form className="sign-in-up__form" onSubmit={handleSubmit}>
          <div className="sign-in-up__form-inputs">
            <div className="sign-in-up__form-input-container">
              <label htmlFor="email" className="sign-in-up__form-input-label">
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
                placeholder="E-mail"
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
                  !isValid ? "sign-in-up__form-input_error" : ""
                }}`}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
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
            Что-то пошло не так...
          </span>
          <button
            className="sign-in-up__form-submit sign-in-up__form-submit_login btn"
            type="submit"
          >
            Войти
          </button>
        </form>
        <Link to="/signup" className="sign-in-up__login-link link">
          Ещё не зарегистрированы?{" "}
          <span className="sign-in-up__login-link-part">Регистрация</span>
        </Link>
      </section>
    </main>
  );
}

export default Login;
