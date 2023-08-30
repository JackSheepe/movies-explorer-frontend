import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import studentImg from "../../../images/student.png";

export default function AboutMe() {
  return (
    <section className="section student" id="student">
      <h2 className="section__heading">Студент</h2>
      <div className="student__card">
        <div className="student__text">
          <h3 className="student__text-name">Владимир</h3>
          <p className="student__text-job">Фронтенд-разработчик, 23 года</p>
          <p className="student__text-about">
            Во время обучения на графического дизайнера обнаружил для себя что
            мне интересно создавать сайты, со временем понял, что я хочу чтобы
            эти сайты можно было "тыкать" и начал изучать html, css и js. Понял
            что информация в интернете плохо структурирована и нет нормальных
            практических заданий, поэтому решил пройти курс по веб-разработке.
            Благодоря курсу и дополнительному самостоятельному обучению я могу
            создавать полноценные веб-приложения, сервисы и статические сайты.
          </p>
          <a
            className="student__link-git link"
            href="https://github.com/JackSheepe"
          >
            Github
          </a>
        </div>
        <div className="student__img-container">
          <img
            className="student__img"
            src={studentImg}
            alt="Фото студента"
          ></img>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}
