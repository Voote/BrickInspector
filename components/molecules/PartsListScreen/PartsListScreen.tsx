import { FetchApi } from '@/features/api/fetchApi';
import React, { FC } from 'react';
import { View } from 'react-native';

export const PartsListScreen: FC<{ route: any }> = ({ route }) => {
  const { setNumber } = route.params;

  return (
    <View className="bg-gray-400">
      <FetchApi searchQuery={setNumber} variant="PARTS" />
    </View>
  );
};
