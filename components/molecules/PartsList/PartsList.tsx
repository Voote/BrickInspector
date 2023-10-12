import { CountButton } from '@/components/atoms/CountButton/CountButton';
import { FetchedDataProps, ResultItem } from '@/features/helpers/dataTypes';
import { FC, useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

interface PartListProps {
  partsData: FetchedDataProps;
}

export const PartsList: FC<PartListProps> = ({ partsData }) => {
  const [userQuantities, setUserQuantities] = useState<number[]>([]);

  useEffect(() => {
    setUserQuantities(
      partsData.results.map((item: ResultItem) => item.quantity),
    );
  }, [partsData]);

  const adjustQuantity = (index: number, adjustment: number) => {
    const updatedQuantities = [...userQuantities];
    updatedQuantities[index] += adjustment;
    setUserQuantities(updatedQuantities);
  };

  return (
    <View>
      <Text className="text-center pt-4 text-lg font-bold">
        {partsData.count}
      </Text>
      <View>
        {partsData.results.map((item: ResultItem, index: number) => (
          <View
            key={index}
            className="flex flex-row p-4 border-b-2 items-center"
          >
            <View className="flex-1">
              <Text>Name: {item.part.name}</Text>
              <Text>Color: {item.color.name}</Text>
              <Text>Original Quantity: {item.quantity}</Text>
            </View>
            <View className="">
              <CountButton
                label="+"
                variant="positive"
                action={() => adjustQuantity(index, 1)}
              />
              <Text className="px-2 w-8 text-center">
                {userQuantities[index]}
              </Text>
              <CountButton
                label="-"
                variant="negative"
                action={() => adjustQuantity(index, -1)}
              />
            </View>
            <View className="w-1/4 p-2">
              <Image
                style={{ resizeMode: 'contain' }}
                className="h-[10vh]"
                source={{ uri: item.part.part_img_url }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
