import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SetInfo } from '../../components/molecules/SetInfo/SetInfo';
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
          `${config.apiBaseUrl}${searchQuery}-1?key=${config.apiBaseKey}`,
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
      {loading && <Text className="bg-green-500 mx-12">Loading...</Text>}
      {error && (
        <Text className="text-center text-red-500 p-2 font-bold">
          Error: {error.message}
        </Text>
      )}
      {data && (
        <SetInfo
          dataName={data.name}
          dataImg={data.set_img_url}
          data={data}
        />
      )}
    </View>
  );
};
