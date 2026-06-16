import "./Navbar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
    >
      <div className="navbar__container">
        <div className="navbar__logo">Kisdor</div>

        <nav className="navbar__nav">
          <a href="#">Sobre mí</a>
          <a href="#">Experiencia</a>
          <a href="#">Proyectos</a>
          <a href="#">Skills</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </motion.header>
  );
}
