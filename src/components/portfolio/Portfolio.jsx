import React from "react";
import style from "./portfolio.module.css";

import code from "../../assets/code.svg";
import link from "../../assets/link.svg";
import { FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiRedux, SiSequelize } from "react-icons/si";
import charlie from "../../assets/charlie.svg";
import git from "../../assets/git.svg";
import { BiLogoPostgresql } from "react-icons/bi";
import pokedex from "../../assets/pokedex.svg";
import rick from "../../assets/rick.svg";

function Portfolio() {
  return (
    <section className={style.portfolio} id="portfolio">
      <div className={style.father}>
        <div className={style.subtitle}>
          <img src={code} alt="codeIco" className={style.iconGeneral} />
          <h2>Proyectos</h2>
        </div>
        <div className={style.contenedor}>
          <div className={style.proyect}>
            <div className={style.imgProyect}>
              <img src={charlie} className={style.img} alt="charlie logo" />
            </div>
            <div className={style.descriptionProyect}>
              <h3>MVP - Charlie Web App</h3>
              <ul className={style.ul}>
                <li className={style.react}>
                  <FaReact />
                  React
                </li>
                <li className={style.redux}>
                  <SiRedux /> Redux
                </li>
                <li className={style.css}>
                  <FaCss3 />
                  CSS
                </li>
              </ul>
              <div className={style.text}>
                Participé en el desarrollo del MVP de un marketplace de
                comercios que permite a cada uno tener franquicias con productos
                independientes, con autenticación de terceros, y pagos a través
                de MercadoPago. Destacan funciones como reembolsos de compras y
                generación de QR para administrar pedidos. Además, en esta
                aplicación, los roles se dividen de la siguiente manera: Super
                administrador, Administrador, Colaborador y Usuario.
              </div>

              <a
                href="https://www.youtube.com/watch?v=LbkMOQ-xVGk&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="linkIco" className={style.preview} />
                Preview
              </a>
            </div>
          </div>

          <div className={style.proyect}>
            <div className={style.imgProyect}>
              <img src={pokedex} className={style.img} alt="charlie logo" />
            </div>
            <div className={style.descriptionProyect}>
              <h3>Pokedex</h3>
              <ul className={style.ul}>
                <li className={style.react}>
                  <FaReact />
                  React
                </li>
                <li className={style.redux}>
                  <SiRedux /> Redux
                </li>
                <li className={style.css}>
                  <FaCss3 />
                  CSS
                </li>

                <li className={style.node}>
                  <FaNodeJs />
                  Node
                </li>
                <li className={style.sequelize}>
                  <SiSequelize />
                  Sequelize
                </li>
                <li className={style.express}>
                  <SiExpress />
                  Express
                </li>
                <li className={style.postreSQL}>
                  <BiLogoPostgresql />
                  PostgreSQL
                </li>
              </ul>
              <div className={style.text}>
                Permite a los usuarios explorar información sobre diferentes
                Pokémon. Esta aplicación incluye un diseño responsivo, con
                funcionalidades como búsqueda por nombre y tipo de Pokémon,
                visualización de detalles de cada Pokémon. Además, los usuarios
                tienen la posibilidad de crear su propio Pokémon personalizado,
                añadiendo una característica distintiva a la aplicación.
              </div>
              <div className={style.containerA}>
                <a
                  href="https://github.com/LucianoMoren/POKEMON-PI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="gitIco" className={style.preview} />
                  Code
                </a>
                <a
                  href="https://pokedex-nzh9.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link} alt="linkIco" className={style.preview} />
                  Preview
                </a>
              </div>
            </div>
          </div>

          <div className={style.proyect}>
            <div className={style.imgProyect}>
              <img src={rick} className={style.img} alt="charlie logo" />
            </div>
            <div className={style.descriptionProyect}>
              <h3>Rick And Morty</h3>
              <ul className={style.ul}>
                <li className={style.react}>
                  <FaReact />
                  React
                </li>
                <li className={style.redux}>
                  <SiRedux /> Redux
                </li>
                <li className={style.css}>
                  <FaCss3 />
                  CSS
                </li>

                <li className={style.node}>
                  <FaNodeJs />
                  Node
                </li>
                <li className={style.sequelize}>
                  <SiSequelize />
                  Sequelize
                </li>
                <li className={style.express}>
                  <SiExpress />
                  Express
                </li>
                <li className={style.postreSQL}>
                  <BiLogoPostgresql />
                  PostgreSQL
                </li>
              </ul>
              <div className={style.text}>
                Una aplicación que utiliza la API de Rick and Morty para mostrar
                y filtrar personajes. Los usuarios pueden explorar, ordenar y
                marcar favoritos fácilmente. Ofrece una experiencia rápida y
                divertida para los fanáticos de la serie.
              </div>
              <div className={style.containerA}>
                <a
                  href="https://github.com/LucianoMoren/RICK-AND-MORTY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="gitIco" className={style.preview} />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
