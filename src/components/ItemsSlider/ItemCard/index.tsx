// React & RN
import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';

// Styles
import { styles } from './styles';

// Types
import { ItemCardProps } from './types';

const ItemCard: FC<ItemCardProps> = ({ title, image, badge, price, oldPrice, discount }) => {
  return (
    <View style={styles.card}>
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
    </View>
  );
};

export default ItemCard;
