import React , { useState, useEffect } from 'react';
import Nav from './Nav';
import '../styles/videos.css';


const Videos = () => {

    

    const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);

  useEffect(() => {
    const delay = 1000; // Tiempo de retardo en milisegundos entre la aparición de cada video

    setTimeout(() => setShowVideo1(true), delay * 1);
    setTimeout(() => setShowVideo2(true), delay * 4);
    setTimeout(() => setShowVideo3(true), delay * 8);
    setTimeout(() => setShowVideo4(true), delay * 16);
  }, []);

    return (
<div className="conteiner">
    <Nav />
    <h2 className='title-videos'>En acción</h2>
    <div className="container-videos">
        
        <div className={`video-item video-one ${showVideo1 ? 'visible' : ''}`} style={{marginBottom:'3rem'}} data-text="Click para ver en YouTube">
            <h2>Acacias Negras en Concordia</h2>
            <a href="https://www.youtube.com/watch?v=9nUKlrPm4rk&t=10s">
            <img src="/public/acacias.jpg" alt="Imagen de Acacias Negras" style={{ width:"450px", height:"300px"  }} />
        </a>
        </div>
        <div className={`video-item video-two ${showVideo2 ? 'visible' : ''}`} style={{marginBottom:'3rem'}} data-text="Click para ver en YouTube">
            <h2>Sesión en Concejo Delilberante <br /> sobre escuchas ilegales</h2>
            <a href="https://www.youtube.com/watch?v=qHlgDDCCPnM">
            <img src="/public/debate1.jpg" alt="Imagen de Acacias Negras" style={{ width:"450px", height:"300px"  }}  />
        </a> 
        </div>
        <div className={`video-item video-three ${showVideo3 ? 'visible' : ''}`} style={{marginBottom:'3rem'}} data-text="Click para ver en YouTube">
            <h2>Homenaje a los niños héroes de Acosta Nú</h2>
            <a href="https://www.youtube.com/watch?v=0qhCw2qy5Xk&t=102s">
            <img src="/public/ÑU.jpg" alt="Imagen de Acacias Negras" style={{ width:"450px", height:"300px"  }} />
        </a>  
        </div>
        <div className={`video-item video-four ${showVideo4 ? 'visible' : ''}`} style={{marginBottom:'3rem'}} data-text="Click para ver en YouTube">
            <h2>Debate en Concejo Deliberante <br /> sobre abuso sexual</h2>
            <a href="https://www.youtube.com/watch?v=DATi8vLgSJc&t=23s">
            <img src="/public/debate.jpg" alt="Imagen de Acacias Negras" style={{ width:"450px", height:"300px"  }} />
        </a>
        </div>
    </div>
</div>
    );
};

export default Videos;