import { Image, Text, View } from 'react-native';
import { PrimaryButton } from '../../atoms/Button/PrimaryButton';

export const PartsList = ({ piecesQuantity }) => (
  <View>
    <Text className="text-center pt-4 text-lg font-bold">
      {piecesQuantity}
    </Text>
    <PrimaryButton label={'Show Parts'} action={() => {}} />
  </View>
);
