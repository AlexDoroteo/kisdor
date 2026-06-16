import { useEffect, useState } from "react";

export function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    let startTime;

    const animate = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);

      setCount(progress * end);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    setCount(0);

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
}
