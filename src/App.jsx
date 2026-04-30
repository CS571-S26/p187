import './App.css';
import MyNavbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';
import Contact from './pages/Contact';

import initialApartments from './data/apartments';

function App() {

  const location = useLocation();
const isHome = location.pathname === "/";
  const [apartments, setApartments] = useState(initialApartments);

  function addApartment(newApartment) {
      setApartments((prev) => [
          ...prev,
          { ...newApartment, id: prev.length + 1 }
      ]);
  }

  return (
    <div className={isHome ? "home-bg" : "side-image-bg"}>
      <MyNavbar />

      <div className="container-fluid mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search apartments={apartments}/>} />
          <Route path="/add" element={<Add addApartment={addApartment}/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;