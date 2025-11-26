import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@/src/screens/HomeScreen';
import { SearchScreen } from '../../screens/SearchScreen';
import { CartScreen } from '../../screens/CartScreen';
import { FavoritesScreen } from '../../screens/FavoritesScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';

import { HomeIcon, SearchIcon, CartIcon, FavoritesIcon, ProfileIcon } from '../IconButtons';
import { styles } from './styles';

import type { BottomTabsParamList } from '../../navigation/types';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#10B5E8',
      tabBarInactiveTintColor: '#fff',
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: HomeIcon,
        sceneStyle: { backgroundColor: '#1A1A1A' },
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: SearchIcon,
        sceneStyle: { backgroundColor: '#1A1A1A' },
      }}
    />

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarBadge: 9,
        tabBarIcon: CartIcon,
        sceneStyle: { backgroundColor: '#1A1A1A' },
      }}
    />

    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: FavoritesIcon,
        sceneStyle: { backgroundColor: '#1A1A1A' },
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ProfileIcon,
        sceneStyle: { backgroundColor: '#1A1A1A' },
      }}
    />
  </Tab.Navigator>
);
