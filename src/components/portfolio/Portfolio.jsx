import React from "react";
import style from "./portfolio.module.css";
import logo from "../../assets/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
function Portfolio() {
  return (
    <section className={style.portfolio} id="portfolio">
      <div className={style.subtitle}>
        <h2>PORTFOLIO</h2>
      </div>
      <div className={style.proyects}>
        <div className={style.proyect1}> </div>
        <div className={style.proyect2}> </div>
        <div className={style.proyect3}> </div>
        <div className={style.proyect4}> </div>
        <div className={style.proyect5}> </div>
        <div className={style.proyect6}> </div>
      </div>
      <RiArrowDownSLine className={style.Arrow} />
      <img src={logo} alt="logo-bg" className={style.logoBg} />
    </section>
  );
}

export default Portfolio;
