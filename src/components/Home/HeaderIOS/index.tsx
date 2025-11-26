import { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SearchIcon, MicIcon, QrCodeIcon } from '@/src/components/IconButtons';

import { styles } from './styles';

const HeaderIOS: FC = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/* LOGO */}
        <Text style={styles.logo}>STORE</Text>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          {/* Ліва іконка пошуку (не кнопка, просто індикатор) */}
          <SearchIcon focused={false} color="#9CA3AF" size={18} />

          <TextInput style={styles.input} placeholder="Я шукаю..." placeholderTextColor="#9CA3AF" />

          {/* Праві іконки як кнопки */}
          <View style={styles.rightIcons}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                // TODO: handle mic press
              }}
            >
              <MicIcon focused={false} color="#9CA3AF" size={26} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.qrButton}
              activeOpacity={0.7}
              onPress={() => {
                // TODO: handle QR press
              }}
            >
              <QrCodeIcon focused={false} color="#9CA3AF" size={26} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderIOS;
