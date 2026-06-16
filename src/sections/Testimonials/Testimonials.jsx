import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <span className="testimonials__badge">Testimonials</span>

        <h2>Loved by teams around the world</h2>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="testimonial-card"
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
                delay: index * 0.15,
              }}
            >
              <div className="stars">★★★★★</div>

              <p className="quote">"{item.text}"</p>

              <div className="author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
