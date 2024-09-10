import { useState, useEffect } from 'react';
import { formatNumber } from '../statisticsComponents/numbersFormatting';

const AnimatedNumber = ({ value, duration = 500 }) => {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    const startValue = displayedValue;
    const startTime = performance.now();

    const animate = currentTime => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentValue = startValue + (value - startValue) * progress;

      setDisplayedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayedValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{formatNumber(Math.floor(displayedValue))}</span>;
};

export default AnimatedNumber;
