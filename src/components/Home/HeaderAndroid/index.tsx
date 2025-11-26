import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const HeaderAndroid: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#9CA3AF" />

        <TextInput style={styles.input} placeholder="Я шукаю..." placeholderTextColor="#9CA3AF" />

        <TouchableOpacity>
          <Icon name="qr-code-outline" size={22} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
