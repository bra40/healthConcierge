import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss";

function Navbar() {
  const navRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsMobile(!isMobile);
  };

  const handleAnchorClick = () => {
    if (isMobile) {
      showNavbar();
    }
  };

  return (
    <header className="NavContainer">
      <a className="NavListItem navbar__logo" href="#top">
        <img
          src={
            process.env.PUBLIC_URL +
            "/Health Concierge logos/IMAGOTIPOS/Health Concierge imagotipo BLANCO-ESM-OSC.jpg"
          }
          // src="../"
          alt="logo"
        />
        <h3 className="NavLogo">Health Concierge</h3>
      </a>
      <button className="toggle-nav" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className="anchor" ref={navRef}>
        <button className="toggle-nav toggle-nav-close" onClick={showNavbar}>
          <FaTimes />
        </button>
        <a
          className="NavListItem"
          href="#quienes-somos"
          onClick={handleAnchorClick}
        >
          ¿Quiénes Somos?
        </a>
        <a className="NavListItem" href="#servicio" onClick={handleAnchorClick}>
          Servicio
        </a>
        <a
          className="NavListItem"
          href="#beneficios"
          onClick={handleAnchorClick}
        >
          Beneficios
        </a>
        <a
          className="NavListItem"
          href="#nuestra-red"
          onClick={handleAnchorClick}
        >
          Nuestra Red
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
