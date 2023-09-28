import { useEffect, useState, FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { SetInfo } from '../../components/molecules/SetInfo/SetInfo';
import { config } from '../../config';

type FetchVariant = 'DEFAULT' | 'PARTS';

const variantValue: Record<FetchVariant, string> = {
  DEFAULT: '',
  PARTS: 'parts',
};

interface FetchProps {
  searchQuery: string;
  variant?: FetchVariant;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const FetchWithVariant: FC<FetchProps> = ({
  searchQuery,
  variant = variantValue.DEFAULT,
}) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const endpoint = useMemo(
    () =>
      `${config.apiBaseUrl}/sets/${searchQuery}-1${variant}?key=${config.apiBaseKey}`,
    [searchQuery, variant],
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          const errorMessage =
            response.status === 404
              ? 'Data not found'
              : 'Network response was not ok';
          throw new Error(errorMessage);
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
  }, [endpoint]);

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
