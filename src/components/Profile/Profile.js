import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Profile(props) {
  props.useDocumentTitle("Профиль");

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  const [isChanging, setIsChanging] = React.useState(false);

  function handleChangeBtnClick() {
    setIsChanging(!isChanging);
    currentUser.name = "";
    currentUser.email = "";
    values.name = "";
    values.email = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(values.name, values.email);
  };

  return (
    <main>
      <section className="profile">
        <h1 className="profile__heading">Привет, Владимир!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-inputs">
            <div className="profile__form-input-container">
              <label htmlFor="name" className="profile__form-input-label">
                Имя
              </label>
              <input
                className={`profile__form-input ${
                  isChanging ? "" : "profile__form-input_disabled"
                }`}
                type="text"
                id="name"
                name="name"
                value={values.name || currentUser.name}
                onChange={handleChange}
                placeholder="Имя"
                minLength="2"
                maxLength="30"
              />
            </div>
            <div className="profile__form-input-container">
              <label htmlFor="email" className="profile__form-input-label">
                E-mail
              </label>
              <input
                className={`profile__form-input ${
                  isChanging ? "" : "profile__form-input_disabled"
                }`}
                type="email"
                id="email"
                name="email"
                value={values.email || currentUser.email}
                onChange={handleChange}
                placeholder="E-mail"
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
              isChanging ? "profile__form-submit_shown" : ""
            } ${isValid ? "" : "profile__form-submit_disabled"}`}
            type="submit"
            onClick={handleSubmit}
          >
            Редактировать
          </button>
        </form>
        <button
          className={`profile__form-change btn ${
            isChanging ? "profile__form-change_hidden" : ""
          }`}
          type="button"
          onClick={handleChangeBtnClick}
        >
          Редактировать
        </button>
        <button
          className={`profile__exit-btn btn ${
            isChanging ? "profile__exit-btn_hidden" : ""
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
