import { useState, useEffect } from "react";
import { fetchApi } from "../services/api";

interface FetchState<T> {
  endpoint: string;
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(endpoint: string) {
  const [state, setState] = useState<FetchState<T>>({
    endpoint,
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetchApi<T>(endpoint, controller.signal)
      .then((data) => {
        setState({ endpoint, data, loading: false, error: null });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setState({
          endpoint,
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : String(error),
        });
      });

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return state.endpoint === endpoint
    ? state
    : { data: null, loading: true, error: null };
}