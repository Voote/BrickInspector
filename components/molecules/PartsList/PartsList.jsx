import { Image, Text, View } from 'react-native';

export const PartsList = ({ pieces }) => (
  <View>
    <Text className="text-center pt-4 text-lg font-bold">{pieces.count}</Text>
    <View>
      {pieces.results.map((item, index) => (
        <View
          key={index}
          className="flex flex-row p-4 border-b-2 items-center"
        >
          <View className="flex-1">
            <Text>Name: {item.part.name}</Text>
            <Text>Color: {item.color.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
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
