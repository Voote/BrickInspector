import { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { FetchWithAsyncAwait } from '../../../features/api/fetchApi';

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
      <View className="px-24">
        <TouchableOpacity
          className="bg-[#0055BF] py-2"
          onPress={() => setShouldFetch(true)}
        >
          <Text className="text-center text-white font-bold">Search</Text>
        </TouchableOpacity>
      </View>
      {shouldFetch && <FetchWithAsyncAwait searchQuery={searchQuery} />}
    </View>
  );
};
