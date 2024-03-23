import React from 'react';
import { View, Text } from 'react-native';

interface SetListItemProps {
  setName: string;
  setNum: string;
  year: number;
  ownedParts: number;
  totalParts: number;
}

export const SetListItem: React.FC<SetListItemProps> = ({
  setName,
  setNum,
  year,
  ownedParts,
  totalParts,
}) => (
  <View className="p-4 border-b-2 flex-row justify-between items-center">
    <Text className="font-bold">
      {setName} ({year})
    </Text>
    <Text>
      Owned: {ownedParts}/{totalParts}
    </Text>
  </View>
);
