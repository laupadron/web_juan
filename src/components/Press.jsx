import React, {useRef, useEffect} from 'react';
import Nav from './Nav';
import { gsap, Power3 } from 'gsap';
import uno from '../assets/calle1.jpg';
import  '../styles/press.css';
import two from '../assets/calle2.jpg';
import tres from '../assets/calle3.jpg';
import four from '../assets/calle4.jpg';
import five from '../assets/calle5.jpg';
import six from '../assets/calle6.jpg';


const Press = () => {
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
        <div style={{overflow:'hidden'}} >
            <div className="na">
            <Nav/>
            </div>
            
            <div className='press-container'>
            <div className=" press">
            <div className="hero-content-ixer " >
                            <h2 className='title-press'>
                                <div className="hero-content-lime">
                                    <div className="hero-content-liner-inner" >Oficina Móvil </div>
                                </div>
                                
                                    
                                
                            </h2>
                            <p className='hero-content-lixe '>Juan Domingo acercó las banderas del Justicialismo a los vecinos de la ciudad. <br /> Junto con su equipo, decidieron sacar la oficina a la calle para acercar la función del Concejo Deliberante al ciudadano. <br /><span className='frase'> "La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere <br /> y defiende un solo interés: EL DEL PUEBLO" <br /> J.D.Perón</span></p>
                            
                    </div>
                        
                    <div className="container-img">
                    
                        <div className=" press-img" >
                            <div className="hero-image uno">
                                <img src={uno} alt="" className='press-img'/>
                            </div>
                            
                            <div className="hero-image twoo">
                                <img src={two} alt=""className='press-img' />
                            </div>
                            
                            <div className="hero-image tres">
                                <img src={tres} alt="" className='press-img'/>
                            </div>
                            <div className="hero-image four">
                                <img src={four} alt="" className='press-img'/>
                            </div>
                            <div className="hero-image five">
                                <img src={five} alt=""className='press-img' />
                            </div>
                            <div className="hero-image six">
                                <img src={six} alt=""className='press-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
        
    );
};

export default Press;