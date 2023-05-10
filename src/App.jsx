import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Joinus from "./components/Joinus";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path = "/" element={<Home />} />
        <Route  path = "About" element={<About />} />
        <Route  path = "Contact" element={<Contact />} />
        <Route  path = "Services" element={<Services />} />
        <Route  path = "Joinus" element={<Joinus />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;