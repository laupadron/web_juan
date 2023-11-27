import React,{useState, useEffect, useRef, useReducer } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'
import logo from '../assets/logo_blog.png'
import 'font-awesome/css/font-awesome.min.css';

const initialState = {
  isMenuOpen: false,
  activeSubMenu: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
        activeSubMenu: null,
      };
    case 'toggleSubMenu':
      return {
        ...state,
        activeSubMenu: state.activeSubMenu === action.payload ? null : action.payload,
      };
    case 'closeMenu':
      return {
        ...state,
        isMenuOpen: false,
        activeSubMenu: null,
      };
    default:
      return state;
  }
};

const Nav = () => {
  


  const [cursorX, setCursorX] = useState(-100);
  const [cursorY, setCursorY] = useState(-100);
  const navRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isMenuOpen, activeSubMenu } = state;


  const toggleMenu = () => {
    dispatch({ type: 'toggleMenu' });
  };

  const toggleSubMenu = (index) => {
    dispatch({ type: 'toggleSubMenu', payload: index });
  };

  const closeMenu = () => {
    dispatch({ type: 'closeMenu' });
  };

  const handleLinkClick = () => {
    closeMenu();
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
        <div className="container-nav" ref={navRef}>
        <nav className={`nav-container custom-cursor ${isMenuOpen ? 'menu-open' : ''} `}>
            
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
          <li
            className={`sub-menu-container ${activeSubMenu === 1 ? 'open' : ''}`}
            onClick={() => toggleSubMenu(1)}
          >
            Trabajo Legislativo
            {activeSubMenu === 1 && (
              <ul className="sub-menu">
                <li>
                  <Link to="/proyectos/ordenanzas" onClick={handleLinkClick}>
                    Ordenanzas
                  </Link>
                </li>
                <li>
                  <Link to="/proyectos/resoluciones" onClick={handleLinkClick}>
                    Resoluciones
                  </Link>
                </li>
                <li>
                  <Link to="/proyectos/videos" onClick={handleLinkClick}>
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