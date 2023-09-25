import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { config } from '../../config';

export const FetchWithAsyncAwait = ({ searchQuery }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${config.apiBaseUrl}${searchQuery}?key=${config.apiBaseKey}`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>{data.name}</Text>}
    </View>
  );
};
