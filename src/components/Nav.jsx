import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'
import logo from '../assets/logo_blog.png'
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {
  

  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [cursorX, setCursorX] = useState(-100); // Valor inicial fuera de la pantalla
  const [cursorY, setCursorY] = useState(-100); 
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    closeSubMenu();
  };

  const toggleSubMenu = () => {
    
    setSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  const handleSubMenuLinkClick = () => {
    closeMenu();
    closeSubMenu();
  };

   
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

    return (
        <div className="container-nav">
        <nav className={`nav-container custom-cursor ${isMenuOpen ? 'menu-open' : ''} s`}>
            
        <img src={logo} alt="" className='img-logo'/>
      <div className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span className="material-symbols-outlined">
menu
</span>
      </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="links">
            <Link to="/" onClick={closeMenu} >Home</Link>
          </li>
          <li class="sub-menu-container">
          <div onClick={setSubMenuOpen}>Trabajo Legislativo</div>
          {isSubMenuOpen && (
            <ul className="sub-menu">
              <li>
                <Link to="/proyectos/ordenanzas" onClick={toggleSubMenu}>
                  Ordenanzas
                </Link>
              </li>
              <li>
                <Link to="/proyectos/resoluciones" onClick={toggleSubMenu}>
                  Resoluciones
                </Link>
              </li>
              {/* <li>
                <Link to="/proyectos/minutas" onClick={handleSubMenuLinkClick}>
                  Minutas
                </Link>
              </li> */}
              <li>
                <Link to="/proyectos/videos" onClick={toggleSubMenu}>
                  Material Audiovisual
                </Link>
              </li>
             
            </ul>
          )}
        </li>
          <li>
            <Link to="/prensa" onClick={closeMenu} >Oficina Móvil</Link>
          </li>
          <li>
            <Link to="/radio" onClick={closeMenu}>Radio</Link>
          </li>
          <li>
  <a href="https://www.facebook.com/juandomingo.gallo.758" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-facebook" style={{fontSize:'23px', color:'#5272F2'}}></i> {/* Ícono de Facebook */}
  </a>
</li>
<li>
  <a href="https://www.instagram.com/juandomingogalloconcejal/" target="_blank" rel="noopener noreferrer">
    <i className="fa fa-instagram" style={{fontSize:'25px', color:'#EA1179'}}></i> {/* Ícono de Instagram */}
  </a>
</li>
<li>
  <a href="https://juandomingogallo.blogspot.com/" target="_blank" rel="noopener noreferrer">
    
     <img src="src\assets\blog.jpg" alt=""  style={{width:'23px'}}/> 
  </a>
</li>
          {/* <li>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
          </li> */}
          
          
          <div className="cursor" style={{left:cursorX + 'px',
        top: cursorY + 'px'}}></div>
        <div className="nav-cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>

       
         
        </ul>
        
       
        
      </nav>
      </div>
      
    );
};

export default Nav;