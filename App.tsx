/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { Logo } from './components/atoms/Logo/Logo';
import { AppNavigator } from './features/AppNavigator/AppNavigator';
import { CustomSafeAreaView } from './features/helpers/CustomSafeAreaView/CustomSafeAreaView';

export default function App() {
  enableScreens();

  return (
    <CustomSafeAreaView>
      <Logo />
      <AppNavigator />
      <StatusBar />
    </CustomSafeAreaView>
  );
}
