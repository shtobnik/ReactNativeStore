// React & RN
import React, { FC } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Navigation
import { RootStackParamList } from '@/src/navigation/types';

// Mock API
import { products, ProductRecommendations } from '@/src/api/products';

// Components
import ProductHeader from '@/src/components/Product/ProductHeader';
import BottomActionBar from '@/src/components/Product/BottomActionBar';
import ProductInfoBlock from '@/src/components/Product/ProductInfoBlock';

// Styles
import { styles } from './styles';

type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

interface Props {
  route: ProductRouteProp;
}

export const ProductScreen: FC<Props> = ({ route }) => {
  const { productId } = route.params;

  const product =
    products.find(p => p.id === productId) || ProductRecommendations.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.containerWrapper}>
        <ProductHeader title={'Огляд'} />
        <View>
          <Text style={styles.title}>Товар не знайдено</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.containerWrapper}>
      <ProductHeader title={product.title} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>

        <ProductInfoBlock
          product={{
            price: product.price,
            oldPrice: product.price * 0.8,
            discount: product.discount,
            title: product.title,
          }}
        />
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
