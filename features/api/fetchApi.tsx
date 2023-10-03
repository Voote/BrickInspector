import { PartsList } from '@/components/molecules/PartsList/PartsList';
import { SetInfo } from '@/components/molecules/SetInfo/SetInfo';
import { config } from '@/config';
import { FC, useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import { useFetchData } from '../hooks/useFetchData';
import { StyledLabel } from '@/components/atoms/Label/StyledLabel';

export const FetchWithVariant: FC<FetchProps> = ({
  searchQuery,
  variant = 'SET',
}) => {
  const { value: variantValue } = operationVariant[variant];
  const setNumber =
    (searchQuery.endsWith('-1') && searchQuery) || `${searchQuery}-1`;
  const endpoint = useMemo(
    () =>
      `${config.apiBaseUrl}/sets/${setNumber}${variantValue}?key=${config.apiBaseKey}`,
    [searchQuery, variant],
  );
  const { data, error, loading } = useFetchData(endpoint);

  const renderComponent = (data: any) => {
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

  error && console.log('Error prop in fetchApi.tsx:', error);

  return (
    <ScrollView>
      {loading && <StyledLabel variant="loading">Loading...</StyledLabel>}
      {error && (
        <StyledLabel variant="error">Error: {error.message}</StyledLabel>
      )}
      {data && renderComponent(data)}
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
