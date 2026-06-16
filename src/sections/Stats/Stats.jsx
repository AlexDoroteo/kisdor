import { motion } from "framer-motion";
import Counter from "../../components/Counter/Counter";
import "./Stats.scss";

const stats = [
  {
    value: 50,
    suffix: "K+",
    label: "Active Users",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime",
  },
  {
    value: 120,
    suffix: "+",
    label: "Countries",
  },
  {
    value: 25,
    suffix: "M+",
    label: "Processed",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__container">
        {stats.map((stat, index) => (
          <motion.div
            className="stat"
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <h3>
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
            </h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
