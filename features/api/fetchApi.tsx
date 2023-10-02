import { StyledLabel } from '@/components/atoms/Label/StyledLabel';
import { PartsList } from '@/components/molecules/PartsList/PartsList';
import { SetInfo } from '@/components/molecules/SetInfo/SetInfo';
import { config } from '@/config';
import { FC, useEffect, useMemo, useState } from 'react';
import { ScrollView, Text } from 'react-native';

export const FetchWithVariant: FC<FetchProps> = ({
  searchQuery,
  variant = 'SET',
}) => {
  const { value: variantValue } = operationVariant[variant];
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const setNumber =
    (searchQuery.endsWith('-1') && searchQuery) || `${searchQuery}-1`;

  const endpoint = useMemo(
    () =>
      `${config.apiBaseUrl}/sets/${setNumber}${variantValue}?key=${config.apiBaseKey}`,
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
              ? `Set ${setNumber} data not found`
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

  const renderComponent = () => {
    switch (variant) {
      case 'SET':
        return (
          <SetInfo
            dataName={data.name}
            dataImg={data.set_img_url}
            setNumber={data.set_num}
          />
        );
      case 'PARTS':
        return <PartsList pieces={data} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      {loading && <Text className="bg-green-500 mx-12">Loading...</Text>}
      {console.log(endpoint)}
      {error && (
        <StyledLabel variant="error">Error: {error.message}</StyledLabel>
      )}
      {data && renderComponent()}
    </ScrollView>
  );
};

type FetchVariant = 'SET' | 'PARTS';

const operationVariant: Record<FetchVariant, { value: string }> = {
  SET: { value: '/' },
  PARTS: { value: '/parts' },
};

interface FetchProps {
  searchQuery: string;
  variant?: FetchVariant;
}
