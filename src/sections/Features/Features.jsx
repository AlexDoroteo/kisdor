import { motion } from "framer-motion";
import { features } from "../../data/features";
import "./Features.scss";

export default function Features() {
  return (
    <section className="features" id="services">
      <div className="features__container">
        <span className="features__badge">Especialidades</span>

        <h2 className="features__title">¿Qué puedo aportar?</h2>

        <div className="features__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className="feature-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <div className="feature-card__icon">
                  <Icon />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
