import React from 'react'
import Footer from '../Footer/Footer'
import arqoffice1 from '../../Assets/Images/arqoffice1.jpg'
import arqoffice2 from "../../Assets/Images/arqoffice2.jpg"
import arqoffice3 from '../../Assets/Images/arqoffice3.jpg'
import arqoffice4 from '../../Assets/Images/arqoffice4.jpg'
import arqoffice5 from '../../Assets/Images/arqoffice5.jpg'


const Aboutus = () => {
  return (
    <section id="about-us-page">
      <br />
      <br />
      <div className="second-container">
        <h2>Quiénes somos?</h2>
        <p>
          Somos una empresa con raíces familiares, donde siempre será atendido
          con respeto y profesionalismo, teniendo un compromiso permanente con
          la calidad y satisfacción de nuestros clientes.
        </p>
        <br />
        <br />
        <p>
          En "@", nos especializamos en Construcción en Seco, diseñamos espacios
          funcionales y específicos a partir de las nuevas tendencias
          arquitectónicas. Nos encargamos de realizar integralmente la
          construcción proporcionando seguridad en todo el proceso.
        </p>
        <br />
        <br />
        <h2>Nuestro Equipo y Oficinas</h2>
        <br />
        <br />

        <div class="container-equipo-oficinas">
          
            <img className="img" src={arqoffice1} alt="" />
            <img className="img" src={arqoffice2} alt="" />
            <img className="img" src={arqoffice3} alt="" />
            <img className="img" src={arqoffice4} alt="" />
            <img className="img" src={arqoffice5} alt="" />
          
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </section>
  );
}

export default Aboutus