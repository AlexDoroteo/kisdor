import { motion } from "framer-motion";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        ></motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trabajemos juntos
        </motion.h2>

        <motion.p
          className="contact__description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Actualmente estoy abierto a nuevas oportunidades laborales y proyectos
          relacionados con desarrollo web frontend. Si te interesa conocer más
          sobre mi experiencia o colaborar en algún proyecto, estaré encantado
          de conversar.
        </motion.p>

        <motion.div
          className="contact__actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:apadilladoroteo@gmail.com?subject=Oferta%20Laboral"
            className="contact-btn"
          >
            Correo
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-airi-padilla-doroteo-341b58303/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/AlexDoroteo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
