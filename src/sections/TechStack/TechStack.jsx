import { motion } from "framer-motion";
import "./TechStack.scss";

const technologies = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "SCSS",
  "Laravel",
  "SQL Server",
  "Git",
  "REST APIs",
  "GSAP",
  "Framer Motion",
  "Vite",
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <div className="tech-stack__container">
        <span className="section-tag">Expertise</span>

        <h2>Technologies I Work With</h2>

        <p className="section-description">
          Modern technologies used to build scalable, maintainable and
          performant web applications.
        </p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className="tech-card"
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
                delay: index * 0.05,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
