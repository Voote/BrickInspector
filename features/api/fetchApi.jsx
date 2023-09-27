import { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { config } from '../../config';

export const FetchWithAsyncAwait = ({ searchQuery }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showData, setShowData] = useState(false);

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
      {loading && <Text className="bg-green-500 mx-12">Loading...</Text>}
      {error && (
        <Text className="text-center text-red-500 p-2 font-bold">
          Error: {error.message}
        </Text>
      )}
      {data && (
        <View className="">
          <Text>{data.name}</Text>
          <Button title="Show Data" onPress={() => setShowData(!showData)} />
          {showData && (
            <View className="p-8">
              <Image
                className="w-fit min-h-[50vw]"
                source={{ uri: data.set_img_url }}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
