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
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(0, newQuantities[index] + adjustment);
      return newQuantities;
    });
  }, [userQuantities]);
  const missingPartsCount = partsData.results.reduce(
    (acc, item, index) =>
      acc + Math.max(0, item.quantity - userQuantities[index]),
    0,
  );

  return (
    <View className="bg-gray-400 flex-1">
      <Text className="text-center pt-4 text-lg font-bold">
        Missing <Text className="text-red-700">{missingPartsCount}</Text> of{' '}
        {partsData.count} types
      </Text>
      <FlatList
        data={partsData.results}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        renderItem={useCallback(
          ({ item, index }: RenderItemProps) => (
            <PartListItem
              item={item}
              userQuantity={userQuantities[index]}
              adjustQuantity={(adjustment: number) =>
                adjustQuantity(index, adjustment)
              }
            />
          ),
          [userQuantities, adjustQuantity],
        )}
      />
    </View>
  );
};

interface PartListProps {
  partsData: FetchedDataProps;
}
interface RenderItemProps {
  item: ResultItem;
  index: number;
};
