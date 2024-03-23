import { PrimaryButton } from '@/components/atoms/PrimaryButton/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';

export type RootStackParamList = {
  SetSearch: undefined;
  PartsListScreen: { setNumber: string };
  SavedSetsScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'SetSearch'>;

export const SetInfo: React.FC<SetInfoProps> = ({
  dataName,
  dataImg,
  setNumber,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text className="text-center pt-4 text-lg font-bold">{dataName}</Text>
      <View className="p-8">
        <Image
          style={{ resizeMode: 'contain' }}
          className="h-[30vh]"
          source={{ uri: dataImg }}
        />
      </View>
      <PrimaryButton
        label={'Pieces Details'}
        action={() =>
          navigation.navigate('PartsListScreen', { setNumber: setNumber })
        }
      />
    </View>
  );
};

interface SetInfoProps {
  dataName: string;
  dataImg: string;
  setNumber: string;
}
