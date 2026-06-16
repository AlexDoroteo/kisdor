import { motion } from "framer-motion";
import "./Showcase.scss";

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase__container">
        <motion.div
          className="showcase__content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="showcase__badge">Desarrollo Frontend</span>

          <h2>Interfaces modernas y experiencias web de alto rendimiento</h2>

          <p>
            Desarrollo interfaces web modernas, landings y aplicaciones frontend
            enfocadas en experiencia de usuario, rendimiento y diseño
            responsivo, adaptadas a las necesidades de cada proyecto o negocio.
          </p>
        </motion.div>

        <motion.div
          className="showcase__visual"
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <div className="dashboard-preview">
            <div className="dashboard-preview__header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard-preview__stats">
              <div className="stat-card">
                <h4>Revenue</h4>
                <span>$128k</span>
              </div>

              <div className="stat-card">
                <h4>Growth</h4>
                <span>+18%</span>
              </div>

              <div className="stat-card">
                <h4>Users</h4>
                <span>2.4k</span>
              </div>
            </div>

            <div className="dashboard-preview__chart">
              <div className="chart-line"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
