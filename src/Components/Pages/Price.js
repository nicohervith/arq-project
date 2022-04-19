import React from "react";
import Footer from "../Footer/Footer";

const Price = () => {
  return (
    <section id="presupuesto">
      <br />
      <br />
      <br />
      <div>
        <h1 className="title">Presupuesto</h1>
      </div>
      <br />

      <div class="container-form-presupuesto">
        <input className="input-presupuesto" type="text" placeholder="Nombre" />
        <input
          className="input-presupuesto"
          type="text"
          placeholder="Apellido"
        />
        <input
          className="input-presupuesto"
          type="text"
          placeholder="Provincia"
        />
        <input
          className="input-presupuesto"
          type="text"
          placeholder="Localidad"
        />
        <input
          className="input-presupuesto"
          type="text"
          placeholder="Ubicación"
        />
        <input
          className="input-presupuesto"
          type="text"
          placeholder="Teléfono"
        />
        <input className="input-presupuesto" type="text" placeholder="Email" />

        <br />
        <h5>Posee planos?</h5>
        <form class="form-radio" action="">
          <input
            className="opciones-input"
            type="radio"
            id="si"
            Name="choose_option"
            value="si"
          />
          <label for="si">SI</label>
          <br />
          <input
            className="opciones-input"
            type="radio"
            id="no"
            Name="choose_option"
            value="no"
          />
          <label for="no">NO</label>
          <br />
        </form>

        <br />
        <h5>Cómo llegaste aquí?</h5>
        <form class="form-radio" action="">
          <input
            className="opciones-input"
            type="radio"
            id="instagram"
            Name="choose_option"
            value="instagram"
          />
          <label for="instagram">Instagram</label>
          <br />
          <input
            className="opciones-input"
            type="radio"
            id="facebook"
            Name="choose_option"
            value="facebook"
          />
          <label for="facebook">Facebook</label>
          <br />
          <input
            className="opciones-input"
            type="radio"
            id="google"
            Name="choose_option"
            value="google"
          />
          <label for="google">Google</label>
          <br />
          <input
            className="opciones-input"
            type="radio"
            id="otro"
            Name="choose_option"
            value="otro"
          />
          <label for="otro">Otro</label>
          <br />
        </form>

        <br />
        <h5>Estudio de arquitectura o particular?</h5>
        <form class="form-radio" action="">
          <input
            className="opciones-input"
            type="radio"
            id="estudio"
            Name="choose_option"
            value="estudio"
          />
          <label for="estudio">Estudio</label>
          <br />
          <input
            className="opciones-input"
            type="radio"
            id="particular"
            Name="choose_option"
            value="particular"
          />
          <label for="particular">Particular</label>
          <br />
        </form>

        <br />
        <h5>Tipo de obra</h5>

        <div class="container-selectores">
          <select name="" id="tipo-obre">
            <option value="">Obra nueva</option>
            <option value="">Ampliación</option>
          </select>
          <br />
          <h5>Destino</h5>

          <select name="" id="destino">
            <option value="">Vivienda</option>
            <option value="">Quincho</option>
            <option value="">Local</option>
            <option value="">Depósito</option>
            <option value="">Otro</option>
          </select>
          <br />
          <h5>Plantas</h5>
          <select name="" id="plantas">
            <option value="">Baja</option>
            <option value="">Alta</option>
            <option value="">2 Plantas</option>
          </select>
        </div>
        <br />
        <h5>Otras aclaraciones que quieras agregar</h5>
        <textarea
          className="textarea-presupuesto"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <br />
        <input className="send-button" type="submit" />
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </section>
  );
};

export default Price;
