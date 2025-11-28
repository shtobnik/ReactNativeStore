// React & RN
import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native';

// Components
import ItemCard from '@/src/components/ItemsSlider/ItemCard';

// Styles
import { styles } from './styles';

// Types
import { ItemsSliderProps } from './types';

const ItemsSlider: FC<ItemsSliderProps> = ({ title, items }) => {
  return (
    <View style={styles.wrapper}>
      {title && <Text style={styles.heading}>{title}</Text>}

      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            image={item.image}
            badge={item.badge}
            price={item.price}
            oldPrice={item.oldPrice}
            discount={item.discount}
          />
        )}
      />
    </View>
  );
};

export default ItemsSlider;
