import { FC } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const HeaderIOS: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* LOGO */}
        <Text style={styles.logo}>STORE</Text>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={18} color="#9CA3AF" />

          <TextInput style={styles.input} placeholder="Я шукаю..." placeholderTextColor="#9CA3AF" />

          <View style={styles.rightIcons}>
            <TouchableOpacity>
              <Icon name="mic-outline" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.qrButton}>
              <Icon name="qr-code-outline" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderIOS;
