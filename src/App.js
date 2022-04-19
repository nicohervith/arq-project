import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import PageRoutes from "./Components/PageRoutes";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <PageRoutes/>
    </div>
  );
}

export default App;
