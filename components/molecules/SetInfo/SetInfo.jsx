import { Image, Text, View } from 'react-native';
import { PrimaryButton } from '../../atoms/Button/PrimaryButton';

const fetchMoreDetails = (checkSetData) => {
  console.log(checkSetData);
};

export const SetInfo = ({ dataName, dataImg, data }) => (
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
      label={'Set Details'}
      action={() => fetchMoreDetails(data)}
    />
  </View>
);
