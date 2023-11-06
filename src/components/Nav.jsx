import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'
import logo from '../assets/logo_blog.png'
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {

  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

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

    const [cursorX, setCursorX]=useState()
    const [cursorY, setCursorY]=useState()

    window.addEventListener('mousemove', (e)=>{
    setCursorX(e.pageX)
    setCursorY(e.setCursorY)
    }
    )

    return (
        
        <nav className={`nav-container custom-cursor ${isMenuOpen ? 'menu-open' : ''}`}>
            
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
          <div onClick={toggleSubMenu}>Trabajo Legislativo</div>
          {isSubMenuOpen && (
            <ul className="sub-menu">
              <li>
                <Link to="/proyectos/ordenanzas" onClick={handleSubMenuLinkClick}>
                  Ordenanzas
                </Link>
              </li>
              <li>
                <Link to="/proyectos/resoluciones" onClick={handleSubMenuLinkClick}>
                  Resoluciones
                </Link>
              </li>
              {/* <li>
                <Link to="/proyectos/minutas" onClick={handleSubMenuLinkClick}>
                  Minutas
                </Link>
              </li> */}
              <li>
                <Link to="/proyectos/videos" onClick={handleSubMenuLinkClick}>
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
          {/* <li>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
          </li> */}
          
          
          <div className="cursor" style={{left:cursorX + 'px',
        top: cursorY + 'px'}}></div>
         
        </ul>
        
       
        
      </nav>
      
    );
};

export default Nav;