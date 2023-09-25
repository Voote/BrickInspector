import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { FetchWithAsyncAwait } from '../../../features/api/fetchApi';

export const SetSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <View>
      <TextInput
        placeholder="Enter set number"
        onChangeText={(text) => {
          setSearchQuery(`/sets/${text}`);
          setShouldFetch(false); // Reset the fetch state when the input changes
        }}
      />
      <Button title="Search" onPress={() => setShouldFetch(true)} />
      {shouldFetch && <FetchWithAsyncAwait searchQuery={searchQuery} />}
    </View>
  );
};
