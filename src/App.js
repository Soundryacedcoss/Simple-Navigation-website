import "./App.css";
import Home from "./Components/Home";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import City from "./Components/City";
import LINK1 from "./Components/LINK1";
import LINK2 from "./Components/LINK2";
import LINK3 from "./Components/LINK3";
import Contact from "./Components/Contact";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<City />} />
        <Route path="link1" element={<LINK1 />} />
        <Route path="link2" element={<LINK2 />} />
        <Route path="link3" element={<LINK3 />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Facebook" element={<Facebook/>}/>
        <Route path="Instagram" element={<Instagram/>}/>
      </Routes>
    </div>
  );
}

export default App;
