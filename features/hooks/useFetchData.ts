import { useEffect, useState } from 'react';
import { FetchedDataProps, SetInfoProps } from '../helpers/dataTypes';

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<FetchedDataProps | SetInfoProps | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          const errorMessage =
            response.status === 404
              ? `Data not found`
              : 'Network response was not ok';
          throw new Error(errorMessage);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};
