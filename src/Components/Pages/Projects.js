import React from 'react'
import Footer from '../Footer/Footer';
import { Card,Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects">
      <br />
      <br />
      <br />
      <div>
        <h1 className="title">Nuestros Trabajos</h1>
        <br />
        <p>
          Cada vez es más el publico que opta por construir en seco. El
          steelframing posee beneficios exclusivos, su estructura de perfiles de
          acero galvanizado, además de las placas que integran el sistema,
          placas rigidizadoras, placas de yeso, aislaciones, barreras hidrófugas
          que permiten la construcción de proyectos únicos.
        </p>
      </div>
      <br />
      <br />
      <hr className="hr-projects" />
      <br />
      <br />

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://constructora.online/wp-content/uploads/2020/03/empresa-de-construccion-en-seco-cordoba-argentina-steel-frame-y-tradicional-3.jpg"
              className="img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <br />
              <p>
                <b>Tipo de proyecto:</b> Vivienda
              </p>
              <p>
                <b>Ubicación: </b>La Plata
              </p>
              <p>
                <b>Superficie: </b>80 m2 semicubierto:53 m2
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="project-container">
        <img
          className="img-project"
          src="http://www.yesart.com.ar/content/images/servicio-construccion-tradicional.jpg"
          alt=""
        />

        <img
          className="img-project"
          src="https://www.perfilesjma.com.ar/wp-content/uploads/2020/05/consultoria5.jpg"
          alt=""
        />

        <img
          className="img-project"
          src="https://www.steelframe1.com.ar/wp-content/uploads/2021/02/casas-steel-framing.png"
          alt=""
        />
      </div>

      <br />
      <br />
      <br />
      <hr className="hr-projects" />
      <br />
      <br />

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://constructora.online/wp-content/uploads/2020/03/empresa-de-construccion-en-seco-cordoba-argentina-steel-frame-y-tradicional-3.jpg"
              className="img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <br />
              <p>
                <b>Tipo de proyecto:</b> Vivienda
              </p>
              <p>
                <b>Ubicación: </b>La Plata
              </p>
              <p>
                <b>Superficie: </b>80 m2 semicubierto:53 m2
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="project-container">
        <img
          className="img-project"
          src="http://www.yesart.com.ar/content/images/servicio-construccion-tradicional.jpg"
          alt=""
        />

        <img
          className="img-project"
          src="https://www.perfilesjma.com.ar/wp-content/uploads/2020/05/consultoria5.jpg"
          alt=""
        />

        <img
          className="img-project"
          src="https://www.steelframe1.com.ar/wp-content/uploads/2021/02/casas-steel-framing.png"
          alt=""
        />
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
}

export default Projects