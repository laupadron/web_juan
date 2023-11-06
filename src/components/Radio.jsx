import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from 'gsap';
import Nav from './Nav';
import  '../styles/radio.css';

import one from '../assets/radio4.png';

import three from '../assets/radio3.png';



const Radio = () => {
    useEffect(() => {
        // Seleccionar las imágenes y las líneas del encabezado
        const images = document.querySelectorAll('.hero-image img');
        const lines = document.querySelectorAll('.hero-content-line');
        

        // Configurar la animación inicial
        gsap.set(images, { y: '100%' });
        gsap.set(lines, { y: '100%', opacity: 0 });

        // Animar las imágenes y las líneas en secuencia
        gsap.timeline({ defaults: { ease: Power3.easeInOut } })
            .to(images, { y: '0%', duration: 1.5, stagger: 0.2 })
            .to(lines, { y: '0%', opacity: 2, duration: 0.5, stagger: 0.2 }, '-=0.5');
    }, []); 
   
    return (
        <div style={{overflow:'hidden'}}>
            <div className="nav">
            <Nav/>
            </div>
            
            <div className='radio-container'>
            <div className="container">
                
                        <div className="hero-content-inner" >
                            <h2>
                                <div className="hero-content-line">
                                    <div className="hero-content-liner-inner">Radio </div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-liner-inner">Justicialista</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-liner-inner">Concordia</div>
                                </div>
                                
                            </h2>
                            <p className='hero-content-line'>Radio Justicialista Concordia es un proyecto ideado y llevado a cabo por Juan Domingo y su equipo de trabajo y transmitido en sus comienzos desde el PJ seccional Concordia. Análisis político, historia del Peronismo, Cultura y temas sociales se mixturan con la presencia de referentes invitados</p>
                            <div className="btn-row hero-content-line">
                            <a href="https://www.youtube.com/@justicialistasradio2975" target="_blank" class="youtube-link">
                                <button className="explore-button">
                                    <p>Canal de Youtube</p>
                                    
                                    
                                        <span class="arrow-icon material-symbols-outlined">
                                             youtube_activity
                                        </span>
                                    
                                    
                                </button>
                            </a>
                            
                    </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner" >
                            <div className="hero-image one">
                                <img src={one} alt="" />
                            </div>
                            
                            <div className="hero-image three">
                                <img src={three} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
        
    );
};

export default Radio;