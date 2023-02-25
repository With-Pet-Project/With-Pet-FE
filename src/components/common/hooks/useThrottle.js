import { useState, useRef, useEffect } from 'react';

export function useThrottle(value, delay) {
  const [throttleValue, setThrottleValue] = useState(value);
  const throttling = useRef();

  useEffect(() => {
    if (throttling.current === false) {
      setThrottleValue(value);
      throttling.current = true;
      setTimeout(() => {
        if (throttling?.current) throttling.current = false;
      }, delay);
    }
  }, [value, delay]);
  return throttleValue;
}
