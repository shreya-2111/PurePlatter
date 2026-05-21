import { useEffect, useState } from 'react';

export const useFakeLoading = (delay = 650) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), delay);
    return () => window.clearTimeout(timeout);
  }, [delay]);

  return loading;
};
