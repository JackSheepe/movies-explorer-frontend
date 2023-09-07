import React from "react";
import "./ApiError.css";
import errImage from "../../images/error.svg";

function ApiError(props) {
  const err = props.errText;

  function close() {
    props.setIsApiErrorOpen(false);
  }

  return (
    props.isApiErrorOpen && (
      <div className="api-error">
        <div className="api-error__back" onClick={close}></div>
        <div className="api-error__popup">
          <img
            className="api-error__img"
            src={errImage}
            alt="изображение ошибка"
          />
          <p className="api-error__text">{err}</p>
          <button
            className="btn api-error__close-btn"
            id="api-error-close-btn"
            type="button"
            aria-label="Кнопка закрытия попапа"
            onClick={close}
          ></button>
        </div>
      </div>
    )
  );
}

export default ApiError;
