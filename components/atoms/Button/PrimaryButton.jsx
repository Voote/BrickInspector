import { Text, TouchableOpacity, View } from 'react-native';

export const PrimaryButton = ({ action, label }) => (
  <View className="px-24">
    <TouchableOpacity className="bg-[#0055BF] py-2" onPress={action}>
      <Text className="text-center text-white font-bold">{label}</Text>
    </TouchableOpacity>
  </View>
);
