import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import "./WhyUs.scss";

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="whyus__container">
        <motion.div
          className="whyus__content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="whyus__badge">Why Choose Us</span>

          <h2>Built for teams that move fast</h2>

          <p>
            Manage finances, automate operations and gain visibility across your
            business from a single platform.
          </p>

          <ul>
            <li>
              <FaCheckCircle />
              Real-time analytics
            </li>

            <li>
              <FaCheckCircle />
              Automated workflows
            </li>

            <li>
              <FaCheckCircle />
              Enterprise-grade security
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="whyus__visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="floating-card revenue">
            <span>Revenue</span>
            <h3>$128k</h3>
          </div>

          <div className="floating-card users">
            <span>Users</span>
            <h3>2.4k</h3>
          </div>

          <div className="floating-card growth">
            <span>Growth</span>
            <h3>+18%</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
