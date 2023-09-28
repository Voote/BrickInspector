import { Image, Text, View } from 'react-native';
import { PrimaryButton } from '../../atoms/Button/PrimaryButton';
import { FetchWithVariant } from '../../../features/api/fetchApi';
import { useState } from 'react';

export const SetInfo = ({ dataName, dataImg, setNumber }) => {
  const [shouldFetch, setShouldFetch] = useState(false);

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
        action={() => setShouldFetch(true)}
      />
      {shouldFetch && (
        <FetchWithVariant searchQuery={setNumber} variant="PARTS" />
      )}
    </View>
  );
};
