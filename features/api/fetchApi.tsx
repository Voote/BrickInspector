import { StyledLabel } from '@/components/atoms/Label/StyledLabel';
import { RenderComponent } from '@/components/molecules/RenderComponent/renderComponent';
import { endpoints } from '@/shared/endpoint';
import { FC, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { useFetchData } from '../hooks/useFetchData';

export const FetchWithVariant: FC<FetchProps> = ({
  searchQuery,
  variant,
}) => {
  const setNumber = useMemo(() => {
    return searchQuery.endsWith('-1') ? searchQuery : `${searchQuery}-1`;
  }, [searchQuery]);

  const endpoint = useMemo(() => {
    const { value: variantValue } = operationVariant[variant];

    return endpoints.getSetInfo({ setNumber, variantValue });
  }, [searchQuery, variant]);

  const { data, error, loading } = useFetchData(endpoint);

  return (
    <ScrollView>
      {loading && <StyledLabel variant="loading">Loading...</StyledLabel>}
      {error && (
        <StyledLabel variant="error">Error: {error.message}</StyledLabel>
      )}
      {data && <RenderComponent data={data} variant={variant} />}
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
  variant: FetchVariant;
}
