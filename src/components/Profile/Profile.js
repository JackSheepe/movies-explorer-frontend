import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
  props.useDocumentTitle("Профиль");

  const [email, setEmail] = React.useState("email@email.ru");
  const [name, setName] = React.useState("Владимир");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                className="profile__form-input"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
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
                className="profile__form-input"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
              />
            </div>
          </div>
          <button className="profile__form-submit btn" type="submit">
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__exit-btn btn">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;