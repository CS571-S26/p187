import './App.css';
import MyNavbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';
import Contact from './pages/Contact';

import initialApartments from './data/apartments';

function App() {

  const [apartments, setApartments] = useState(initialApartments);

  function addApartment(newApartment) {
      setApartments((prev) => [
          ...prev,
          { ...newApartment, id: prev.length + 1 }
      ]);
  }

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search apartments={apartments}/>} />
          <Route path="/add" element={<Add addApartment={addApartment}/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;