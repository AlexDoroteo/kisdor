import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3>Alexander Padilla</h3>

        <p>Desarrollador Frontend</p>

        <div className="footer__links">
          <a
            href="https://github.com/AlexDoroteo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-airi-padilla-doroteo-341b58303/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:apadilladoroteo@gmail.com">Correo</a>
        </div>

        <p className="footer__copyright">© 2026 Kisdor.</p>
      </div>
    </footer>
  );
}
