import { useState, useEffect } from "react";
import { fetchApi } from "../services/api";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(endpoint: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    setState({ data: null, loading: true, error: null });

    fetchApi<T>(endpoint)
      .then((data) => {
        if (isMounted) setState({ data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (isMounted) setState({ data: null, loading: false, error: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return state;
}