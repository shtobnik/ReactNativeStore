// React & RN
import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from './styles';

// Types
import { ItemCardProps } from './types';
import { RootStackNavigationProp } from '@/src/navigation/types';

const ItemCard: FC<ItemCardProps> = ({ id, title, image, badge, price, oldPrice, discount }) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const openProduct = (): void => {
    navigation.navigate('Product', { productId: id });
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={openProduct}>
      {/* {discount && <Text style={styles.discount}>{discount}%</Text>} */}

      <View style={styles.imageContainer}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}

        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <View style={styles.priceContainer}>
        {oldPrice && <Text style={styles.oldPrice}>{oldPrice} ₴</Text>}
        <Text style={styles.price}>{price} ₴</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
