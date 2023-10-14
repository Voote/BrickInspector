import { FC, ReactNode } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

interface CustomSafeAreaViewProps {
  children: ReactNode;
}

export const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({
  children,
}) => {
  const isPaddingTop =
    Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 24 : 0;

  return (
    <SafeAreaView
      className="flex-1 items-center bg-gray-600"
      style={{
        paddingTop: isPaddingTop,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
