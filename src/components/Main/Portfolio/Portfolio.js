import React from "react";
import "./Portfolio.css";
import othersiteIcon from "../../../images/othersite.svg";

export default function Portfolio() {
  return (
    <React.Fragment>
      <h4 className="student__portfolio-header">Портфолио</h4>
      <ul className="student__portfolio">
        <li className="student__portfolio-link-container">
          <a
            href="https://jacksheepe.github.io/how-to-learn/"
            className="student__portfolio-link link"
            target="_blank"
          >
            Статичный сайт
            <span className="student__portfolio-link-icon">
              <img
                src={othersiteIcon}
                alt="иконка перехода на другой сайт"
              ></img>
            </span>
          </a>
        </li>
        <li className="student__portfolio-link-container">
          <a
            href="https://jacksheepe.github.io/russian-travel/"
            className="student__portfolio-link link"
            target="_blank"
          >
            Адаптивный сайт
            <span className="student__portfolio-link-icon">
              <img
                src={othersiteIcon}
                alt="иконка перехода на другой сайт"
              ></img>
            </span>
          </a>
        </li>
        <li className="student__portfolio-link-container student__portfolio-link-container_noline">
          <a
            href="https://jacksheepe.github.io/mesto/"
            className="student__portfolio-link link"
            target="_blank"
          >
            Одностраничное приложение
            <span className="student__portfolio-link-icon">
              <img
                src={othersiteIcon}
                alt="иконка перехода на другой сайт"
              ></img>
            </span>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
