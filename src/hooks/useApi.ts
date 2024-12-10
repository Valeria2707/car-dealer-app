import { useEffect, useState } from 'react';

export default function useApi<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  let suspendPromise: Promise<void> | null = null;

  const fetchData = async (signal: AbortSignal) => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options, signal });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData: T = await response.json();
      setData(responseData);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const runFetch = () => {
    const controller = new AbortController();
    const { signal } = controller;

    suspendPromise = fetchData(signal).catch(err => {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    });

    return () => controller.abort();
  };

  useEffect(() => {
    const cleanup = runFetch();
    return cleanup;
  }, [url, options]);

  if (!data && !error && suspendPromise) {
    throw suspendPromise;
  }

  return { data, error, loading };
}
