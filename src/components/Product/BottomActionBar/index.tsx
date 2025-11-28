// React & RN
import { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Components
import { CompareIcon, CartIcon, FavoritesIcon } from '@/src/components/IconButtons';

// Styles
import { styles } from './styles';

// Types
import { BottomActionBarProps } from './types';

const BottomActionBar: FC<BottomActionBarProps> = ({ onCompare, onCart, onWishlist, onBuy }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={onCompare} style={styles.iconButton}>
          <CompareIcon color="#fff" focused={false} size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onCart} style={styles.iconButton}>
          <CartIcon color="#fff" focused={false} size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onWishlist} style={styles.iconButton}>
          <FavoritesIcon color="#fff" focused={false} size={24} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onBuy} style={styles.buyButton}>
        <Text style={styles.buyText}>Купити зараз</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomActionBar;
