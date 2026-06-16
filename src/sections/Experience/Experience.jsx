import { motion } from "framer-motion";
import "./Experience.scss";

const experiences = [
  {
    year: "2024",
    title: "Módulo de Retornos",
    description:
      "Desarrollé un módulo para la gestión de retornos de equipos de almacén, permitiendo el seguimiento mediante estados y el control de préstamos, devoluciones y movimientos de equipos.",
  },
  {
    year: "2025",
    title: "Módulo de Cotizaciones automatizadas",
    description:
      "Desarrollé un módulo de cotizaciones que realiza cálculos financieros automáticos para generar planes de pago a distintos plazos y la generación automática de PDFs con el desglose completo de la cotización.",
  },
  {
    year: "2025",
    title: "Módulo de Contabilidad",
    description:
      "Desarrollé un módulo contable para la gestión de cuentas internas y control de pagos, implementando también autorizaciones de pagos, además de incluir visualización de ingresos y egresos con filtrados por fechas y métricas de totales en tiempo real, integrado con el flujo de solicitudes de pago del sistema.",
  },
  {
    year: "2025",
    title: "Aplicación de Encriptación de archivos sensibles",
    description:
      "Desarrollé una aplicación desktop con Electron y JavaScript para la protección de archivos sensibles utilizados por el área administrativa.",
  },
  {
    year: "2026",
    title: "Soporte y mantenimiento",
    description:
      "Realicé mantenimiento correctivo, resolución de incidencias reportadas por usuarios y ajustes necesarios para garantizar la estabilidad de los sistemas en producción.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <h2>Experiencia Profesional</h2>

        <p className="section-description">
          Mi evolución como desarrollador frontend participando en el desarrollo
          de un sistema ERP para la gestión de procesos empresariales.
        </p>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              className="timeline__item"
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <div className="timeline__dot"></div>

              <div className="timeline__content">
                <div className="timeline__title">
                  <span className="timeline__year">{item.year}</span> -{" "}
                  {item.title}
                </div>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
