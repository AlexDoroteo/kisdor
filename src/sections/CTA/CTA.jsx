import { motion } from "framer-motion";
import "./CTA.scss";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__background"></div>

      <motion.div
        className="cta__content"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
      >
        <span className="cta__badge">Start Today</span>

        <h2>Ready to transform your business?</h2>

        <p>
          Join thousands of teams using our platform to automate workflows and
          accelerate growth.
        </p>

        <button className="cta__button">Get Started</button>
      </motion.div>
    </section>
  );
}
