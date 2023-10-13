import { FetchedDataProps, ResultItem } from '@/features/helpers/dataTypes';
import { FC, useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { PartListItem } from '../PartListItem/PartListItem';

export const PartsList: FC<PartListProps> = ({ partsData }) => {
  const [userQuantities, setUserQuantities] = useState<number[]>([]);

  useEffect(() => {
    setUserQuantities(
      partsData.results.map((item: ResultItem) => item.quantity),
    );
  }, [partsData]);

  const adjustQuantity = useCallback((index: number, adjustment: number) => {
    setUserQuantities((prevQuantities) => {
      const updatedQuantity = Math.max(0, prevQuantities[index] + adjustment);
      if (updatedQuantity === prevQuantities[index]) return prevQuantities;
      const newQuantities = [...prevQuantities];
      newQuantities[index] = updatedQuantity;
      return newQuantities;
    });
  }, []);

  return (
    <View className="bg-gray-400 flex-1">
      <Text className="text-center pt-4 text-lg font-bold">
        {partsData.count}
      </Text>
      <FlatList
        data={partsData.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PartListItem
            item={item}
            userQuantity={userQuantities[index]}
            adjustQuantity={(adjustment: number) =>
              adjustQuantity(index, adjustment)
            }
          />
        )}
      ></FlatList>
    </View>
  );
};

interface PartListProps {
  partsData: FetchedDataProps;
}
