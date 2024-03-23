import React from 'react';
import { PrimaryButton } from '@/components/atoms/PrimaryButton/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { RootStackParamList } from '../SetInfo/SetInfo';

export const SavedSetsButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className="pt-12">
      <PrimaryButton
        label="View Saved Sets"
        action={() => navigation.navigate('SavedSetsScreen')}
      />
    </View>
  );
};
