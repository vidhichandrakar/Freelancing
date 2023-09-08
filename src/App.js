import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home"
import AMAE from "./Component/Home/Sub-Component/AMAE"
import Products from "./Component/Home/Sub-Component/Products";
import About from "./Component/Home/Sub-Component/About";

function App() {
  return (
   <>
   <Home />
   <AMAE />
   <Products />
   <About />
   </>
  );
}

export default App;
