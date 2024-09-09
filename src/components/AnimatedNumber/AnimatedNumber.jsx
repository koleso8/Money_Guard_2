import { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    const startValue = displayedValue;
    const startTime = performance.now();

    const animate = currentTime => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(
        startValue + (value - startValue) * progress
      );

      setDisplayedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, displayedValue]);

  return <span>{displayedValue}</span>;
};

export default AnimatedNumber;
