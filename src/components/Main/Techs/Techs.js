import "./Techs.css";

export default function Techs() {
  return (
    <section className="section  tech" id="tech">
      <h2 className="section__heading">Технологии</h2>
      <h3 className="tech__heading">7 технологий</h3>
      <p className="tech__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__list-el">HTML</li>
        <li className="tech__list-el">CSS</li>
        <li className="tech__list-el">JS</li>
        <li className="tech__list-el">React</li>
        <li className="tech__list-el">Git</li>
        <li className="tech__list-el">Express.js</li>
        <li className="tech__list-el">mongoDB</li>
      </ul>
    </section>
  );
}
