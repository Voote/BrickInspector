import { PrimaryButton } from '@/components/atoms/Button/PrimaryButton';
import { FetchWithVariant } from '@/features/api/fetchApi';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

export const SetSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const isSearched = `${shouldFetch ? 'Change' : 'Search'} Set`;
  return (
    <View>
      <TextInput
        className="mx-24 text-center"
        placeholder="Enter set number"
        onChangeText={(text) => {
          setSearchQuery(text);
          setShouldFetch(false);
        }}
      />
      <PrimaryButton action={() => setShouldFetch(true)} label={isSearched} />
      {shouldFetch && (
        <FetchWithVariant searchQuery={searchQuery} variant="SET" />
      )}
    </View>
  );
};
