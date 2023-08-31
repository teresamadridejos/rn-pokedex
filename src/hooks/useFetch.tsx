// useFetch.js
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ApiResponse {
  results: any[]; // Adjust this type to match the actual structure of the API response
  // Other properties if present in the API response
}

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export function useFetch(endpoint: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Specify the type as Error or null

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpoint);

        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (err: any) { // Specify the type of err as any or Error
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}