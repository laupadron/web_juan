import { BrowserRouter ,HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { gsap, Power3 } from 'gsap';
import Press from './components/Press';
import Resolutions from './components/Resolutions';
import Home from './components/Home';
import Radio from './components/Radio';
import { useState, useEffect } from 'react';
import Ordinances from './components/Ordinances';
import Videos from './components/Videos';
import './styles/nav.css'



function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
  return (
    <>
      <HashRouter>
      <div>
        
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/proyectos/resoluciones" element={<Resolutions timeline = {tl}/>} />
        <Route path="/proyectos/ordenanzas" element={<Ordinances timeline = {tl}/>} />
        <Route path="/proyectos/videos" element={<Videos timeline = {tl}/>} />
        <Route path="/prensa" element={<Press/>} />
        <Route path="/radio" element={<Radio/>} />
        {/* <Route path="/contacto" element={<Contact/>} /> */}
        </Routes>
       
      </div> 
      </HashRouter>
      <div
        className="cursor"
        style={{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }}
      ></div>
       </>
  )
}

export default App
