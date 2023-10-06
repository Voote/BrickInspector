/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { Logo } from './components/atoms/Logo/Logo';
import { WelcomeText } from './components/atoms/WelcomeText/WelcomeText';
import { AppNavigator } from './features/helpers/AppNavigator';
import { CustomSafeAreaView } from './features/helpers/CustomSafeAreaView/CustomSafeAreaView';

export default function App() {
  enableScreens();

  return (
    <CustomSafeAreaView>
      <Logo />
      <WelcomeText />
      <AppNavigator />
      <StatusBar />
    </CustomSafeAreaView>
  );
}
