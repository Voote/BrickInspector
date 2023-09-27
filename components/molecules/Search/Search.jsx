import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { FetchWithAsyncAwait } from '../../../features/api/fetchApi';
import { PrimaryButton } from '../../atoms/Button/PrimaryButton';

export const SetSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <View>
      <TextInput
        className="mx-24 text-center"
        placeholder="Enter set number"
        onChangeText={(text) => {
          setSearchQuery(`/sets/${text}`);
          setShouldFetch(false); // Reset the fetch state when the input changes
        }}
      />
      <PrimaryButton action={() => setShouldFetch(true)} label={'Search'} />
      {shouldFetch && <FetchWithAsyncAwait searchQuery={searchQuery} />}
    </View>
  );
};
