import React from "react";
import style from "./portfolio.module.css";
import logo from "../../assets/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";
function Portfolio() {
  return (
    <section className={style.portfolio} id="portfolio">
      <div className={style.subtitle}>
        <h2>Portfolio</h2>
      </div>
      <div className={style.proyects}>
        <div className={style.proyect1}> </div>
        <div className={style.proyect2}> </div>
        <div className={style.proyect3}> </div>
        <div className={style.proyect4}> </div>
        <div className={style.proyect5}> </div>
        <div className={style.proyect6}> </div>
      </div>
      <Link
        to="skills"
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

export default Portfolio;
