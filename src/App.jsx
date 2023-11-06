import { BrowserRouter ,HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { gsap, Power3 } from 'gsap';
import Press from './components/Press';
import Resolutions from './components/Resolutions';
import Home from './components/Home';
import Radio from './components/Radio';

import Ordinances from './components/Ordinances';
import Videos from './components/Videos';




function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
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
  )
}

export default App
