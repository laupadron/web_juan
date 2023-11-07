import React, {useRef, useEffect, useState} from 'react';
import Nav from './Nav';
import resolutions from '../resolutions.json';
import { gsap, Power3 } from 'gsap';
import '../styles/projects.css';


const Resolutions = () => {
  let nameRefs = useRef([]);
  let imgRefs = useRef([]);
  let descRefs = useRef([]);
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  //FILTRO PARA AREAS
  const [selectedArea, setSelectedArea] = useState(null);
  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };
  
  const filteredResolutions = selectedArea
    ? resolutions.resolutions.filter(res => res.area.includes(selectedArea))
    : resolutions.resolutions;
  
  const uniqueAreas = [...new Set(resolutions.resolutions.flatMap(res => res.area))];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(prevIndex => prevIndex + 1);
    }, 200); // Cambia 200 según el intervalo deseado entre la aparición de elementos
  
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);
 

  
    return (
        <div>
            <Nav/>
            <div>
              <h1 className='title'>Resoluciones</h1>
            <div className="filter-buttons">
            <button onClick={() => handleAreaChange(null)}>Todas las áreas</button>
          {uniqueAreas.map((area, index) => (
            <button key={index} onClick={() => handleAreaChange(area)}>{area}</button>
          ))}
        </div>
        <div className="grid-container">
          {filteredResolutions.map((res, index) => (
            <div key={res.name}  className={`grid-item ${index < selectedIndex ? 'animation-ended' : ''}`} data-text={res.name}style={{ animationDelay: `${index * 0.2}s` }}>
              
              
              <img src={res.image} alt={res.name} ref={el => (imgRefs.current[index] = el)} className='animation-ended' />
              <h2 ref={el => (nameRefs.current[index] = el)} style={{ fontSize: '15px', marginTop: '0rem', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1',backgroundColor: 'rgba(255, 255, 255, 0.7)',  }}>{res.number}</h2>
              <button onClick={() => window.location.href = res.link}  style={{ width: '30%' }}>+ Info</button>
            </div>
          ))}
        </div>
      </div>
      {/* After the map, set final state to keep elements on screen after animation */}
      <style>{`
          .animation-ended {
            opacity: 1 !important;
            
          }
        `}</style>
    </div>
        
    );
};

export default Resolutions;