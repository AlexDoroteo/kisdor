import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "./useCounter";

export default function Counter({ end, suffix = "", decimals = 0 }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useCounter(isInView ? end : 0);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
