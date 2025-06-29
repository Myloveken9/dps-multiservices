import React, { useState } from "react";
import logo from '../assets/logo.jpg'; // ajuste le chemin selon l’endroit où tu es


interface NavbarProps {
  lang: "pt" | "fr" | "ht" | "en" | "es";
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Texte selon langue
  const labels = {
    pt: { home: "Início", services: "Serviços", about: "Quem-Somos", projects: "Projetos", contact: "Contato" },
    fr: { home: "Accueil", services: "Services", about: "A-Propos", projects: "Projets", contact: "Contact" },
    ht: { home: "Akèy", services: "Sèvis", about: "Kiyès nou ye", projects: "Pwojè", contact: "Kontak" },
    en: { home: "Home", services: "Services", about: "About", projects: "Projects", contact: "Contact" },
    es: { home: "Inicio", services: "Servicios", about: "QuemSomos", projects: "Proyectos", contact: "Contacto" }
  };

  const t = labels[lang];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </a>

        <button
          className="burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          type="button"
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>{t.home}</a></li>
          <li><a href="#servicos" onClick={closeMenu}>{t.services}</a></li>
          <li><a href="#quem-somos" onClick={closeMenu}>{t.about}</a></li>
          <li><a href="#projetos" onClick={closeMenu}>{t.projects}</a></li>
          <li><a href="#contato" onClick={closeMenu}>{t.contact}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
