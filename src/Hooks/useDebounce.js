import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  // Store debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Delay update
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Clear timer if value changes
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
