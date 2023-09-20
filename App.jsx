import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Logo } from './components/atoms/Logo/Logo';
import { CustomSafeAreaView } from './components/atoms/CustomSafeAreaView/CustomSafeAreaView';
import { WelcomeText } from './components/atoms/WelcomeText/WelcomeTexxt';

export default function App() {
  return (
    <CustomSafeAreaView>
      <Logo />
      <WelcomeText />
      <View className="flex-1 justify-center ">
        <Text className="text-white">Hello world, good to see you</Text>
        <StatusBar style="" />
      </View>
    </CustomSafeAreaView>
  );
}
