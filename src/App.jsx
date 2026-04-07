import './App.css';
import MyNavbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Search from './pages/Search';
import PageTwo from './pages/PageTwo';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;