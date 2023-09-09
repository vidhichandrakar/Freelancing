import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home"
import AMAE from "./Component/Home/Sub-Component/AMAE"
import Products from "./Component/Home/Sub-Component/Products";
import About from "./Component/Home/Sub-Component/About";
import Gallery from "./Component/Home/Sub-Component/Gallery";
import Video from "./Component/Home/Sub-Component/Video";
import Testimonals from "./Component/Home/Sub-Component/Testimonals";
import Contact from "./Component/Home/Sub-Component/Contact";
import Footer from "./Component/Home/Sub-Component/Footer";

function App() {
  return (
   <>
   <Home />
   <AMAE />
   <Products />
   <About />
   <Gallery />
   <Video />
   <Testimonals />
   <Contact />
   <Footer/>
   </>
  );
}

export default App;
