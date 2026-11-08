const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

export async function fetchApi<T>(
  endpoint: string,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, { signal });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }
  
  return response.json();
}