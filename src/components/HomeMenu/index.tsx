import React, { FC } from 'react';
import { View } from 'react-native';

// Components
import HomeMenuItem from '@/src/components/HomeMenuItem';

// Styles
import { styles } from './styles';

// Types
import { HomeMenuProps } from './types';

const HomeMenu: FC<HomeMenuProps> = ({ items }) => {
  return (
    <View style={styles.menuWrapper}>
      {items.map(item => (
        <HomeMenuItem key={item.label} icon={item.icon} label={item.label} />
      ))}
    </View>
  );
};

export default HomeMenu;
