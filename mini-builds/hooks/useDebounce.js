import { useCallback, useRef } from "react";

const useDebounce = (fn, delay) => {
  const timerId = useRef(null);

  const debounceFn = useCallback(
    (...args) => {
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debounceFn;
};

export default useDebounce;
