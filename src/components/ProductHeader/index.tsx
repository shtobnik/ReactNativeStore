// React & RN
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { BackIcon, ShareIcon } from '../IconButtons';

// Styles
import { styles } from './styles';

// Types
import { ProductHeaderProps } from './types';
import { RootStackNavigationProp } from '@/src/navigation/types';

const ProductHeader: FC<ProductHeaderProps> = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView edges={['top']} style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity style={styles.leftBtn} onPress={() => navigation.goBack()}>
        <BackIcon color="#fff" focused={false} size={24} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title} numberOfLines={1}>
        Огляд
      </Text>

      {/* Share Button */}
      <TouchableOpacity style={styles.rightBtn} onPress={() => console.log('Share')}>
        <ShareIcon color="#fff" focused={false} size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductHeader;
