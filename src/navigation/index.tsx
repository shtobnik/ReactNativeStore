// src/navigation/RootNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabs } from '../components/BottomTabs';
import { ProductScreen } from '../screens/ProductScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />

        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{
            headerShown: true,
            title: 'Product',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
