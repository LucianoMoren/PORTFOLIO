import React from "react";
import style from "./education.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import school from "../../assets/school.svg";

import { RxDoubleArrowRight } from "react-icons/rx";
function Education() {
  return (
    <section className={style.education} id="education">
      <div className={style.father}>
        <div className={style.subtitle}>
          <img src={school} alt="schoolicon" className={style.iconGeneral} />
          <h2>Educación</h2>
        </div>
        <div className={style.contenedor}>
          <div className={style.study}>
            <div className={style.containerTitle}>
              <h3>Tecnicatura Superior en Programacion</h3>
              <h4>TECLAB Instituto Técnico Superior</h4>

              <p>2022 - 2024</p>
            </div>
            <div className={style.description}>
              <p>
                Durante mi formación como Tecnico en Programación, adquirí
                habilidades en{" "}
                <span className={style.descriptionSpan}>
                  desarrollo web, bases de datos, pruebas de software, gestión
                  de proyectos y diseño de aplicaciones móviles.
                </span>
                También desarrollé competencias en{" "}
                <span className={style.descriptionSpan}>
                  UX, metodologías ágiles, habilidades de comunicación y
                  liderazgo.
                </span>
              </p>
              <div className={style.leanMore}>
                <span className={style.more}>Learn more</span>
                <RxDoubleArrowRight className={style.arrowdown} />
              </div>
            </div>
          </div>

          <div className={style.study}>
            <div className={style.containerTitle}>
              <h3>Full Stack Developer</h3>
              <h4>Soy Henry</h4>
              <p>2023 - 2024</p>
            </div>
            <div className={style.description}>
              <p>
                Más de 700 horas de formación teórica y práctica dedicadas al
                aprendizaje de tecnologías tales como{" "}
                <span className={style.descriptionSpan}>
                  HTML5, CSS, JavaScript, React, Redux, Tailwind.css, Node.js,
                  Express, Sequelize y PostgreSQL
                </span>
                . Durante este período, he llevado a cabo proyectos tanto de
                manera individual como en equipo.
              </p>
              <div className={style.leanMore}>
                <span className={style.more}>Learn more</span>
                <RxDoubleArrowRight className={style.arrowdown} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        exact="true"
        className={style.linkArrow}
      >
        <RiArrowDownSLine className={style.Arrow} />
      </Link>
    </section>
  );
}

export default Education;
