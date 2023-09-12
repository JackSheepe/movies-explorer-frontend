import React from "react";
import "./ApiSuccess.css";
import successImage from "../../images/succes.svg";

function ApiSuccess(props) {
  function close() {
    props.setIsApiSuccessOpen(false);
  }

  return (
    props.isApiSuccessOpen && (
      <div className="api-success">
        <div className="api-success__back" onClick={close}></div>
        <div className="api-success__popup">
          <img
            className="api-success__img"
            src={successImage}
            alt="изображение отлично"
          />
          <p className="api-success__text">Успех!</p>
          <button
            className="btn api-success__close-btn"
            id="api-success-close-btn"
            type="button"
            aria-label="Кнопка закрытия попапа"
            onClick={close}
          ></button>
        </div>
      </div>
    )
  );
}

export default ApiSuccess;
