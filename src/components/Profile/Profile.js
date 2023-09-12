import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Profile(props) {
  props.useDocumentTitle("Профиль");

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeBtnClick() {
    props.setIsProfileChanging(true);
    values.name = currentUser.name;
    values.email = currentUser.email;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(values.name, values.email);
  };

  return (
    <main>
      <section className="profile">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-inputs">
            <div className="profile__form-input-container">
              <label htmlFor="name" className="profile__form-input-label">
                Имя
              </label>
              <input
                className={`profile__form-input ${
                  props.isProfileChanging ? "" : "profile__form-input_disabled"
                }`}
                type="text"
                id="name"
                name="name"
                value={values.name || currentUser.name}
                onChange={handleChange}
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <div className="profile__form-input-container">
              <label htmlFor="email" className="profile__form-input-label">
                E-mail
              </label>
              <input
                className={`profile__form-input ${
                  props.isProfileChanging ? "" : "profile__form-input_disabled"
                }`}
                type="email"
                id="email"
                name="email"
                value={values.email || currentUser.email}
                onChange={handleChange}
                pattern="[^@!#$%&*;:'`~+=\|\?\/\{\}\^\s]+@[^@\s]+\.[^@\s]+"
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <span
            className={
              !isValid
                ? "profile__error-text profile__error-text_active"
                : "profile__error-text"
            }
          >
            {errors.name} {errors.email}
          </span>
          <button
            className={`profile__form-submit btn ${
              props.isProfileChanging ? "profile__form-submit_shown" : ""
            } ${isValid ? "" : "profile__form-submit_disabled"}`}
            type="submit"
            onClick={handleSubmit}
            disabled={props.isSubmiting ? true : false}
          >
            Редактировать
          </button>
        </form>
        <button
          className={`profile__form-change btn ${
            props.isProfileChanging ? "profile__form-change_hidden" : ""
          }`}
          type="button"
          onClick={handleChangeBtnClick}
        >
          Редактировать
        </button>
        <button
          className={`profile__exit-btn btn ${
            props.isProfileChanging ? "profile__exit-btn_hidden" : ""
          }`}
          onClick={props.onLogout}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
