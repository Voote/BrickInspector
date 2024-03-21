import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface PrimaryButtonProps {
  action: (event: GestureResponderEvent) => void;
  label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  action,
  label,
}) => (
  <View className="px-24">
    <TouchableOpacity className="bg-[#0055BF] py-2" onPress={action}>
      <Text className="text-center text-white font-bold">{label}</Text>
    </TouchableOpacity>
  </View>
);
