import { Logo } from '@/components/atoms/Logo/Logo';
import { WelcomeText } from '@/components/atoms/WelcomeText/WelcomeText';
import { SetSearch } from '@/components/molecules/Search/Search';
import { View } from 'react-native';

export const LandingPage = () => {
  return (
    <>
      <Logo />
      <WelcomeText />
      <View className="w-full pt-4">
        <SetSearch />
      </View>
    </>
  );
};
