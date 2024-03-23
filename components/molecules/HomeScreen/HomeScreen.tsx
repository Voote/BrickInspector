import { SetSearch } from '@/components/molecules/Search/Search';
import { View } from 'react-native';
import { SavedSetsButton } from '../SavedSetsButton/SavedSetsButton';

export const HomeScreen = () => (
  <View className="bg-gray-600 flex-1 pt-2">
    <SetSearch />
    <SavedSetsButton />
  </View>
);
