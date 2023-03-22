// import React, { useState } from "react";
// import "./navbar.scss";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar-container">
//       <div className="navbar">
//         <a href="/" className="navbar-logo">
//           Health Concierge
//         </a>
//         <div className="menu-icon" onClick={toggle}>
//           <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
//           <div className="nav-item">
//             <a href="/quienes-somos" className="nav-links">
//               ¿Quiénes Somos?
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/servicio" className="nav-links">
//               Servicio
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/beneficios" className="nav-links">
//               Beneficios
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/red" className="nav-links">
//               Nuestra Red
//             </a>
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// // ---------------------------------------------
// import React, { useState } from "react";
// import "./navbar.scss";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar-container">
//       <div className="navbar">
//         <a href="/" className="navbar-logo">
//           Health Concierge
//         </a>
//         <div className="menu-icon" onClick={toggle}>
//           <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
//           <div className="nav-item">
//             <a href="/quienes-somos" className="nav-links">
//               ¿Quiénes Somos?
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/servicio" className="nav-links">
//               Servicio
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/beneficios" className="nav-links">
//               Beneficios
//             </a>
//           </div>
//           <div className="nav-item">
//             <a href="/red" className="nav-links">
//               Nuestra Red
//             </a>
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-parent">
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="#landing">##</a>
          <h1>Health Concierge</h1>
        </div>
        <div className="navbar__menu">
          <button className="navbar__menu-button" onClick={toggleMenu}>
            <span className="navbar__menu-icon"></span>
          </button>
          <div
            className={`self-center navbar__menu-list anchor ${
              showMenu ? "navbar__menu-list--active" : ""
            }`}
          >
            <div className="navbar__menu-item">
              <a href="#quienes-somos">¿Quiénes Somos?</a>
            </div>
            <div className="navbar__menu-item">
              <a href="#servicio">Servicio</a>
            </div>
            <div className="navbar__menu-item">
              <a href="#beneficios">Beneficios</a>
            </div>
            <div className="navbar__menu-item">
              <a href="#nuestra-red">Nuestra Red</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;