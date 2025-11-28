// React & RN
import React, { FC } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Navigation
import { RootStackParamList } from '@/src/navigation/types';

// Mock API
import { products } from '@/src/api/products';

// Components
import ProductHeader from '@/src/components/Product/ProductHeader';
import BottomActionBar from '@/src/components/Product/BottomActionBar';

// Styles
import { styles } from './styles';

type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

interface Props {
  route: ProductRouteProp;
}

export const ProductScreen: FC<Props> = ({ route }) => {
  const { productId } = route.params;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <View>
        <Text style={styles.title}>Товар не знайдено</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerWrapper}>
      <ProductHeader title={product.title} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>{product.price} ₴</Text>

        <Button title="Додати в кошик" onPress={() => console.log('Add to cart')} />
      </ScrollView>

      <BottomActionBar
        onCompare={() => console.log('compare')}
        onCart={() => console.log('add to cart')}
        onWishlist={() => console.log('wishlist')}
        onBuy={() => console.log('buy')}
      />
    </View>
  );
};
