import { Link } from "react-router-dom";

const PageLink = () => {
  return (
    <nav>
      <li>
        <Link to="/"></Link>
        <Link to="/quienes-somos"></Link>
        <Link to="/proyectos"></Link>
        <Link to="/presupuesto"></Link>
        <Link to="/contacto"></Link>
      </li>
    </nav>
  );
};

export default PageLink;
