import { PartsListScreen } from '@/components/molecules/PartsListScreen/PartsListScreen';
import { SetSearch } from '@/components/molecules/Search/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <View className="flex-1 w-full pt-4">
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'gold' },
            headerTitleStyle: { fontSize: 18 },
          }}
          initialRouteName="SetSearch"
        >
          <Stack.Screen
            options={{
              headerTitleAlign: 'center',
            }}
            name="Search sets"
            component={SetSearch}
          />
          <Stack.Screen name="PartsListScreen" component={PartsListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
