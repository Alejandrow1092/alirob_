import './App.css';
import './Common/index.scss'
import Inicio from "./Components/Inicio/Inicio"
import Footer from "./Common/Footer/Footer"
import NavBar from "./Common/NavBar/NavBar"
import Galeria from './Components/Galeria/Galeria';
import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Grants from './Components/Grants/Grants';
import Participants from './Components/Participants/Participants';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/grants' element={<Grants/>}/>
          <Route path='/participants' element={<Participants/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
