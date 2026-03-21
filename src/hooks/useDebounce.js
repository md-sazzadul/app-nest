import { useEffect, useRef, useState } from "react";

export const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [value, delay]);

  return debounced;
};
