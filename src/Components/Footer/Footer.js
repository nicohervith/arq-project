import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Navegación</h2>

            <ui className="list-unstyled">
              <li>
                <Link className="selection-footer" to="/quienes-somos">
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link className="selection-footer" to="/proyectos">
                  Nuestras obras
                </Link>
              </li>
              <li>
                <Link className="selection-footer" to="/presupuesto">
                  Presupuesto
                </Link>
              </li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h2>Contacto</h2>
            <ui className="list-unstyled">
              <li>Teléfono</li>
              <li>info@hotmail.com</li>
              <li>Dirección</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h2>Redes Sociales</h2>
            <ui className="list-unstyled">
              <li>
                <Link className="selection-footer" to="">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="selection-footer" to="">
                  Facebook
                </Link>
              </li>
            </ui>
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EXAMPLE | All rights reserved |
            Terms Of Service | Privacy
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer
