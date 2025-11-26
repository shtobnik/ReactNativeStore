import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { products } from '../../api/products';
import { View, Text, Image, Button } from 'react-native';

// Styles
import { styles } from './styles';
type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

type Props = {
  route: ProductRouteProp;
};

export const ProductScreen = ({ route }: Props) => {
  const { productId } = route.params;
  const product = products.find(p => p.id === productId);

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Button title="Add to cart" onPress={() => console.log('Add to cart')} />
    </View>
  );
};
