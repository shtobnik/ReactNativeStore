import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { BottomTabs } from '@/src/components/BottomTabs';
import { ProductScreen } from '@/src/screens/ProductScreen';

// Styles
import { styles } from './styles';
// Types
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: styles.navigationContainer,
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />

        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
