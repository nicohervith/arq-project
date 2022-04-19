import HomeCarousel from "../Carousel/Carousel";
import React from 'react';
import steel4 from "../../Assets/Images/steel4.png";
import steel5 from "../../Assets/Images/steel5.jpg";
import {  Link } from "react-router-dom";
import Footer from "../Footer/Footer";




const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <section id="main-section">
        <br />
        <br />
        <h1 className="title">Bienvenidos </h1>
        <br />
        <br />
        <p>
          Cada vez es más el publico que opta por construir en seco. El
          steelframing posee beneficios exclusivos, su estructura de perfiles de
          acero galvanizado, además de las placas que integran el sistema,
          placas rigidizadoras, placas de yeso, aislaciones, barreras hidrófugas
          que permiten la construcción de proyectos únicos.
        </p>
        <br />
        <br />
        <br />
        <div className="text-container">
          <div className="text-container-style">
            <div className="text-card">
              <h4 className="text-container__h4">Planeamiento</h4>
              <p>
                Para la ejecución exitosa de un proyecto, la planificación
                efectiva es esencial. Aquellos involucrados en el diseño y
                ejecución de la infraestructura en cuestión deben considerar los
                requisitos de zonificación.
              </p>
            </div>

            <div className="text-card">
              <h4 className="text-container__h4">Sistema eficiente</h4>
              <p>
                Es un sistema caracterizado por su flexibilidad, durabilidad y
                eficiencia energética, y desde febrero del 2018 se lo considera,
                en Argentina, un sistema de construcción tradicional.
              </p>
            </div>

            <div className="text-card">
              <h4 className="text-container__h4">Familias felices</h4>
              <p>
                Nuestro sistema garantiza una obra rápida, limpia, sin
                complicaciones y con profesionales a cargo que simplifican el
                proceso. En 4 meses,tu familia va a disfrutar de su nuevo hogar
                sin preocupaciones.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="contenedor">
          <div className="card-container">
            <Link className="" to="/proyectos">
              <figure className="figure1">
                <img src={steel4} alt="" />
                <div className="capa">
                  <h3>NUESTRAS OBRAS</h3>
                </div>
              </figure>
            </Link>
          </div>

          <div className="card-container">
            <Link className="nav-selection" to="/presupuesto">
              <figure className="figure2">
                <img src={steel5} alt="" />
                <div className="capa">
                  <h3>PRESUPUESTO</h3>
                </div>
              </figure>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </section>

      <section id="overlay">
        <div className="container-end">
          <br />
          <br />
          <br />
          <h2>Por qué elegirnos?</h2>
          <br />
          <div className="container-style">
            <div className="cajas">
              <h5>Personal Calificado</h5>
              <p>
                Todo nuestro equipo está preparado, calificado y cuenta con
                experiencia en construcción en Steel Framing.
              </p>
            </div>

            <div className="cajas">
              <h5>Ahorrá tiempo y dinero</h5>
              <p>
                Nosotros nos encargamos de todo. Tu casa puede estar lista en 4
                meses sin que tengas que preocuparte de buscar precios, comprar
                materiales o lidiar con proveedores.
              </p>
            </div>

            <div className="cajas">
              <h5>Presupuesto detallado</h5>
              <p>
                Nuestro presupuesto está confeccionado al detalle para que
                tengas total conocimiento de cada uno de los gastos que lleva la
                construcción de tu casa.
              </p>
            </div>

            <div className="cajas">
              <h5>Sin costos ocultos</h5>
              <p>
                Como todo está detallado al inicio, no te vas a encontrar con
                engaños ni costos ocultos.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <br />
      </section>
      <section id="main-section" className="button">
        <Link className="nav-selection-button" to="/presupuesto">
          <div className="button-container">
            <button className="home-button">Pedí tu Presupuesto</button>
          </div>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Home
