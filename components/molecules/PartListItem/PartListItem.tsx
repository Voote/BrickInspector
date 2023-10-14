import { CountButton } from '@/components/atoms/CountButton/CountButton';
import { ResultItem } from '@/features/helpers/dataTypes';
import { FC } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

interface PartListItemProps {
  item: ResultItem;
  userQuantity: number;
  adjustQuantity: (adjustment: number) => void;
}

export const PartListItem: FC<PartListItemProps> = ({
  item,
  userQuantity,
  adjustQuantity,
}) => (
  <View className="flex flex-row p-4 border-b-2 items-center">
    <View className="flex-1">
      <Text>Name: {item.part.name}</Text>
      <Text>Color: {item.color.name}</Text>
      <View className="flex flex-row gap-4">
        <Text>Original Quantity: {item.quantity}</Text>
        <Text className="text-red-700 font-semibold">
          Missing: {Math.max(0, item.quantity - userQuantity)}
        </Text>
      </View>
    </View>
    <View className="pl-2">
      <CountButton
        label="+"
        variant="positive"
        action={() => adjustQuantity(1)}
        longAction={() => adjustQuantity(10)}
      />
      <TextInput
        value={String(userQuantity)}
        onChangeText={(text) => {
          const newValue = parseInt(text, 10);
          (text === '' && adjustQuantity(-userQuantity)) ||
            (!isNaN(newValue) && adjustQuantity(newValue - userQuantity));
        }}
        keyboardType="numeric"
        style={{ width: 50, textAlign: 'center' }}
      />
      <CountButton
        label="-"
        variant="negative"
        action={() => adjustQuantity(-1)}
        longAction={() => adjustQuantity(-10)}
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
);
