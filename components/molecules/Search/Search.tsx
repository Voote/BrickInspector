import { PrimaryButton } from '@/components/atoms/PrimaryButton/PrimaryButton';
import { FetchApi } from '@/features/api/fetchApi';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

export const SetSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const isSearched = `${shouldFetch ? 'Change' : 'Search'} Set`;

  return (
    <View className="bg-gray-600 flex-1 pt-2">
      <TextInput
        className="mx-24 text-center"
        placeholder="Enter set number"
        keyboardType="numeric"
        onChangeText={(text) => {
          setSearchQuery(text);
          setShouldFetch(false);
        }}
      />
      <PrimaryButton action={() => setShouldFetch(true)} label={isSearched} />
      {shouldFetch && <FetchApi searchQuery={searchQuery} variant="SET" />}
    </View>
  );
};
