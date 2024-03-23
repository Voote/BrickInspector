import { PrimaryButton } from '@/components/atoms/PrimaryButton/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

export const SavedSetsButton = () => {
  const navigation =
    useNavigation<StackNavigationProp<{ SavedSetsScreen: undefined }>>();

  return (
    <View className="pt-12">
      <PrimaryButton
        label="View Saved Sets"
        action={() => navigation.navigate('SavedSetsScreen')}
      />
    </View>
  );
};
