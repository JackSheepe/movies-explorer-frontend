import "./Promo.css";
import NavTab from "../NavTab/NavTab";

export default function Promo() {
  return (
    <section className="section hero" id="hero">
      <div className="hero__heading">
        <h1 className="hero__heading-text">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <NavTab />
    </section>
  );
}
