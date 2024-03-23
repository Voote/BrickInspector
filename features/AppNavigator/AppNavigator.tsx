import { HomeScreen } from '@/components/molecules/HomeScreen/HomeScreen';
import { PartsListScreen } from '@/components/molecules/PartsListScreen/PartsListScreen';
import { SavedSetsScreen } from '@/components/molecules/SavedSetsScreen/SavedSetsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './AppNavigator.styles';
// import { ButtonSavedSets } from '@/components/molecules/ButtonSavedSets/ButtonSavedSets';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen
          name="HomeScreen"
          options={{
            title:
              'Welcome to BrickInspector, your handy list of LEGO sets condition',
            headerTitle: (props) => (
              <Text {...props} style={styles.customTitle} />
            ),
          }}
          component={HomeScreen}
        />
        <Stack.Screen name="PartsListScreen" component={PartsListScreen} />
        <Stack.Screen name="SavedSetsScreen" component={SavedSetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
