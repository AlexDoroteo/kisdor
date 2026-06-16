import { motion } from "framer-motion";
import "./CaseStudies.scss";

const projects = [
  {
    title: "Enterprise Quotation System",
    tech: "Angular • TypeScript • REST API",
    description:
      "Developed a complete quotation workflow including dynamic pricing and PDF generation.",
  },
  {
    title: "Accounting Platform",
    tech: "Angular • RxJS • APIs",
    description: "Built accounting modules and financial management tools.",
  },
  {
    title: "Contract Management",
    tech: "Laravel • SQL Server",
    description: "Created contract monitoring and reporting solutions.",
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <span className="section-tag">Professional Experience</span>

        <h2>Case Studies</h2>

        <p className="section-description">
          Projects developed in professional environments using modern web
          technologies.
        </p>

        <div className="case-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="case-card"
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
              <h3>{project.title}</h3>

              <span>{project.tech}</span>

              <p>{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
