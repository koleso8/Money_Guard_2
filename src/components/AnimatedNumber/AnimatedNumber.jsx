import { useState, useEffect } from 'react';
import { formatNumber } from '../statisticsComponents/numbersFormatting';

const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    const adjustedDuration = duration * 1.3;
    const startValue = displayedValue;
    const startTime = performance.now();

    const animate = currentTime => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / adjustedDuration, 1);

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
