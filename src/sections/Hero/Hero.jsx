import "./Hero.scss";
import Counter from "../../components/Counter/Counter";
import { motion } from "framer-motion";
const stats = [
  {
    value: 1.5,
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    value: 3,
    suffix: "",
    label: "Proyectos principales",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Desarrollador Frontend especializado en Angular y TypeScript
          </h1>

          <p className="hero__description">
            Desarrollo aplicaciones web modernas enfocadas en rendimiento,
            experiencia de usuario y código mantenible.
          </p>
        </div>
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          <div className="dashboard">
            <div className="dashboard__sidebar">
              <div className="dashboard__logo"></div>

              <div className="dashboard__menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="dashboard__content">
              <motion.div
                className="about__card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div className="about__item">
                    <h3>
                      <Counter
                        end={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                    </h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
                <div className="about__item">
                  <h3>Angular</h3>
                  <p>Tecnología principal</p>
                </div>

                <div className="about__item">
                  <h3>MySQL</h3>
                  <p>Bases de datos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
