import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Logo } from './components/atoms/Logo/Logo';
import { WelcomeText } from './components/atoms/WelcomeText/WelcomeTexxt';
import { SetSearch } from './components/molecules/Search/Search';
import { CustomSafeAreaView } from './features/helpers/CustomSafeAreaView/CustomSafeAreaView';

export default function App() {
  return (
    <CustomSafeAreaView>
      <Logo />
      <WelcomeText />
      <View className="w-full">
        <SetSearch />
        <StatusBar style="" />
      </View>
    </CustomSafeAreaView>
  );
}
