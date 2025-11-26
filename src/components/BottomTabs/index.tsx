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
      tabBarInactiveTintColor: '#1C274C',
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: HomeIcon,
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: SearchIcon,
      }}
    />

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarBadge: 9,
        tabBarIcon: CartIcon,
      }}
    />

    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: FavoritesIcon,
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ProfileIcon,
      }}
    />
  </Tab.Navigator>
);
