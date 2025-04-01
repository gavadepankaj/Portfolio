import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (  
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
