import { SafeAreaView, StatusBar } from 'react-native';

export const CustomSafeAreaView = ({ children }) => (
  <SafeAreaView
    className="flex-1 items-center bg-gray-600"
    style={{
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 24 : 0,
    }}
  >
    {children}
  </SafeAreaView>
);
