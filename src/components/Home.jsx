import React,{useState,useRef,useEffect} from 'react';
import Nav from './Nav';
import '../styles/home.css';
import juan from '../assets/juan.jpg';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin); 

const Home = () => {
    const [showImage, setShowImage] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setShowImage(true);
    setShowProfile(true)
  }, []);

 
    return (
        <div style={{width:'100vw'}}>
            <Nav />
        <div className="profile-container">
           <img src={juan} alt="" className={`img-juan ${showImage ? 'show' : ''}`}/>
            <p className={`profile ${showProfile ? 'showP' : ''}`}>Juan Domingo Gallo es un joven abogado nacido en la ciudad de Concordia, provincia de Entre Ríos.
            <br /> <br />Peronista apasionado, y militante por herencia y convicción, fue elegido concejal de su ciudad en la gestión de Enrique Cresto durante el período 2019-2023.
            <br /> <br />A lo largo de su trabajo legislativo, se caracterizó por mantener un estrecho vínculo con sus vecinos y por su capacidad de conformar un equipo de trabajo honesto y comprometido
            con la función pública.
            <br /> <br />Dueño de un carácter inquieto y emprendedor, generó un espacio radial partidario abierto a la comunidad, recorriendo gran parte de la provincia y dándole voz a dirigentes y militantes
            de toda la zona.
            <br /><br />Los invitamos a conocer su trabajo legislativo y sus espacios de encuentro con vecinos y militancia.</p>
        </div>
          </div>
      
    );
};

export default Home;