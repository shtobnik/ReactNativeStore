import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const ActionBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.white}>ЧОРНА ПʼЯТНИЦЯ ДО </Text>
        <Text style={styles.yellow}>–70%</Text>
        <Text style={styles.white}>. ПЕРШІ ЗНИЖКИ </Text>
        <Text style={styles.yellow}>23.11 З 20:00</Text>
      </Text>
    </View>
  );
};
