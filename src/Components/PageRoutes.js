import { Routes, Route } from "react-router-dom";
import PageLink from './PageLink'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Projects from "./Pages/Projects";
import Price from "./Pages/Price";
import Contact from "./Pages/Contact";


const PageRoutes = () => {
  return (
    <div>
      <PageLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<Aboutus />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/presupuesto" element={<Price />} />
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default PageRoutes;
