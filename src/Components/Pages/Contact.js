import React from 'react'
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section id="contacto">
      <br />
      <br />
      <br />
      <div>
        <h1 className="title">Contacto</h1>
      </div>

      <br />
      <br />

      <div class="container-form-contact">
        <input
          type="text"
          name=""
          className="input-contact"
          placeholder="Nombre"
        ></input>
        <input
          type="text"
          name=""
          className="input-contact"
          placeholder="Apellido"
        ></input>
        <input
          type="text"
          name=""
          className="input-contact"
          placeholder="Email"
        ></input>
        <input
          type="text"
          name=""
          className="input-contact"
          placeholder="Provincia"
        ></input>
        <input
          type="text"
          name=""
          className="input-contact"
          placeholder="Localidad"
        ></input>
        <textarea
          name=""
          className="textarea-contact"
          cols="30"
          rows="10"
          placeholder="Algún comentario"
        ></textarea>
        <input className="send-button" type="submit" />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
}

export default Contact;