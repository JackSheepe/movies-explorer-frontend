import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="section about" id="about">
      <h2 className="section__heading">О проекте</h2>
      <div className="about__stages">
        <div className="about__stage">
          <h3 className="about__stage-heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__stage-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__stage">
          <h3 className="about__stage-heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__stage-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timeline">
        <span className="about__timeline-backend">
          <p className="about__timeline-time-text about__timeline-time-text_backend">
            1 неделя
          </p>
          <p className="about__timeline-work-text">back-end</p>
        </span>
        <span className="about__timeline-frontend">
          <p className="about__timeline-time-text about__timeline-time-text_frontend">
            4 неделя
          </p>
          <p className="about__timeline-work-text">front-end</p>
        </span>
      </div>
    </section>
  );
}
