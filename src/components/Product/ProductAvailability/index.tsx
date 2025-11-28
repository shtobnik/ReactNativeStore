// React & RN
import React, { FC } from 'react';
import { Text } from 'react-native';

// Styles
import { styles } from './styles';

const ProductAvailability: FC = () => {
  return <Text style={styles.inStock}>В наявності</Text>;
};

export default ProductAvailability;
