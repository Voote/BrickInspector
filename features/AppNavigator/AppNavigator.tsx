import { PartsListScreen } from '@/components/molecules/PartsListScreen/PartsListScreen';
import { SetSearch } from '@/components/molecules/Search/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './AppNavigator.styles';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleAlign: 'center',
            headerTitleStyle: styles.headerTitleStyle,
          }}
          initialRouteName="SetSearch"
        >
          <Stack.Screen
            name="SetSearch"
            options={{
              title:
                'Welcome to BrickInspector, your handy list of LEGO sets condition',
              headerTitle: (props) => (
                <Text {...props} style={styles.customTitle} />
              ),
            }}
            component={SetSearch}
          />
          <Stack.Screen name="PartsListScreen" component={PartsListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
