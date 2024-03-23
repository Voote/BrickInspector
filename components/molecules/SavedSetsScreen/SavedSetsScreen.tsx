import { SetListItem } from '@/components/molecules/SetListItem/SetListItem';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export const SavedSetsScreen = () => {
  // Example state structure for saved sets; you would fetch this data from your backend or local storage
  const [savedSets, setSavedSets] = useState([
    {
      set_num: '1234',
      name: 'Millennium Falcon',
      year: 2020,
      num_parts_owned: 1250,
      total_parts: 1300,
    },
    // Add more sets as needed
  ]);

  return (
    <View className="bg-gray-100 flex-1">
      <Text className="text-center pt-4 text-lg font-bold">
        Your Saved Sets
      </Text>
      <FlatList
        data={savedSets}
        keyExtractor={(item) => item.set_num}
        renderItem={({ item }) => (
          <SetListItem
            setName={item.name}
            setNum={item.set_num}
            year={item.year}
            ownedParts={item.num_parts_owned}
            totalParts={item.total_parts}
          />
        )}
      />
    </View>
  );
};
